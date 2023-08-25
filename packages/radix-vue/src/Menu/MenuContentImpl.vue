<script lang="ts">
export interface MenuContentContextValue {
  onItemEnter(event: PointerEvent): void
  onItemLeave(event: PointerEvent): void
  onTriggerLeave(event: PointerEvent): void
  searchRef: Ref<string>
  pointerGraceTimerRef: Ref<number>
  onPointerGraceIntentChange(intent: GraceIntent | null): void
}

export const MENU_CONTENT_INJECTION_KEY
  = Symbol() as InjectionKey<MenuContentContextValue>

export interface MenuContentImplPrivateProps {
  disableOutsidePointerEvents?: DismissableLayerProps['disableOutsidePointerEvents']

  /**
   * Whether scrolling outside the `MenuContent` should be prevented
   * (default: `false`)
   */
  disableOutsideScroll?: boolean

  /**
   * Whether focus should be trapped within the `MenuContent`
   * (default: false)
   */
  trapFocus?: FocusScopeProps['trapped']
}

export type MenuContentImplEmits = DismissableLayerEmits & Omit<RovingFocusGroupEmits, 'update:currentTabStopId'> & {
  'openAutoFocus': [event: Event]
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  'closeAutoFocus': [event: Event]
}

export interface MenuContentImplProps
  extends MenuContentImplPrivateProps,
  Omit<PopperContentProps, 'dir' | 'onPlaced'> {
  /**
   * Whether keyboard navigation should loop around
   * @defaultValue false
   */
  loop?: boolean
}

export interface MenuRootContentProps
  extends Omit<PopperContentProps, 'dir' | 'onPlaced'> {
  /**
   * Whether keyboard navigation should loop around
   * @defaultValue false
   */
  loop?: boolean
}
</script>

<script setup lang="ts">
import {
  type InjectionKey,
  type Ref,
  inject,
  onUnmounted,
  provide,
  ref,
  toRefs,
  watch,
} from 'vue'
import { MENU_INJECTION_KEY, MENU_ROOT_INJECTION_KEY } from './MenuRoot.vue'
import {
  FIRST_LAST_KEYS,
  type GraceIntent,
  LAST_KEYS,
  type Side,
  focusFirst,
  getOpenState,
  isMouseEvent,
  isPointerInGraceArea,
} from './utils'
import { FocusScope, type FocusScopeProps } from '@/FocusScope'
import {
  DismissableLayer,
  type DismissableLayerEmits,
  type DismissableLayerProps,
} from '@/DismissableLayer'
import {
  PopperContent,
  type PopperContentProps,
  PopperContentPropsDefaultValue,
} from '@/Popper'
import { usePrimitiveElement } from '@/Primitive'
import { RovingFocusGroup, type RovingFocusGroupEmits } from '@/RovingFocus'
import {
  useArrowNavigation,
  useBodyScrollLock,
  useCollection,
  useFocusGuards,
  useTypeahead,
} from '@/shared'

const props = withDefaults(defineProps<MenuContentImplProps>(), {
  ...PopperContentPropsDefaultValue,
})
const emits = defineEmits<MenuContentImplEmits>()
const context = inject(MENU_INJECTION_KEY)
const rootContext = inject(MENU_ROOT_INJECTION_KEY)

const { trapFocus, disableOutsidePointerEvents, loop } = toRefs(props)

useFocusGuards()
useBodyScrollLock(disableOutsidePointerEvents.value)

const searchRef = ref('')
const timerRef = ref(0)
const pointerGraceTimerRef = ref(0)
const pointerGraceIntentRef = ref<GraceIntent | null>(null)
const pointerDirRef = ref<Side>('right')
const lastPointerXRef = ref(0)
const currentItemId = ref<string | null>(null)

const { createCollection } = useCollection()
const { primitiveElement, currentElement: contentElement }
  = usePrimitiveElement()
const collectionItems = createCollection(contentElement)

watch(contentElement, (el) => {
  context!.onContentChange(el)
})

const { handleTypeaheadSearch } = useTypeahead(collectionItems)

onUnmounted(() => {
  window.clearTimeout(timerRef.value)
})

function isPointerMovingToSubmenu(event: PointerEvent) {
  const isMovingTowards
    = pointerDirRef.value === pointerGraceIntentRef.value?.side

  return (
    isMovingTowards
    && isPointerInGraceArea(event, pointerGraceIntentRef.value?.area)
  )
}

async function handleMountAutoFocus(event: Event) {
  emits('openAutoFocus', event)

  // when opening, explicitly focus the content area only and leave
  // `onEntryFocus` in  control of focusing first item
  event.preventDefault()
  contentElement.value?.focus()
}

function handleKeyDown(event: KeyboardEvent) {
  // submenu key events bubble through portals. We only care about keys in this menu.
  const target = event.target as HTMLElement
  const isKeyDownInside
    = target.closest('[data-radix-menu-content]') === event.currentTarget
  const isModifierKey = event.ctrlKey || event.altKey || event.metaKey
  const isCharacterKey = event.key.length === 1

  const el = useArrowNavigation(
    event,
    document.activeElement as HTMLElement,
    contentElement.value,
    {
      loop: loop.value,
      arrowKeyOptions: 'vertical',
      dir: rootContext?.dir.value,
      focus: true,
    },
  )
  if (el)
    return el?.focus()

  // prevent "Space" taken account into handleTypeahead
  if (event.code === 'Space')
    return

  if (isKeyDownInside) {
    // menus should not be navigated using tab key so we prevent it
    if (event.key === 'Tab')
      event.preventDefault()
    if (!isModifierKey && isCharacterKey)
      handleTypeaheadSearch(event.key)
  }

  // focus first/last item based on key pressed
  if (event.target !== contentElement.value)
    return
  if (!FIRST_LAST_KEYS.includes(event.key))
    return
  event.preventDefault()
  const candidateNodes = collectionItems.value
  if (LAST_KEYS.includes(event.key))
    candidateNodes.reverse()
  focusFirst(candidateNodes)
}

function handleBlur(event: FocusEvent) {
  // clear search buffer when leaving the menu
  // @ts-expect-error the provided currentTarget and target should be HTMLElement
  if (!event?.currentTarget?.contains?.(event.target)) {
    window.clearTimeout(timerRef.value)
    searchRef.value = ''
  }
}

function handlePointerMove(event: PointerEvent) {
  if (!isMouseEvent(event))
    return
  const target = event.target as HTMLElement
  const pointerXHasChanged = lastPointerXRef.value !== event.clientX

  // We don't use `event.movementX` for this check because Safari will
  // always return `0` on a pointer event.
  if (
    (event?.currentTarget as HTMLElement)?.contains(target)
    && pointerXHasChanged
  ) {
    const newDir = event.clientX > lastPointerXRef.value ? 'right' : 'left'
    pointerDirRef.value = newDir
    lastPointerXRef.value = event.clientX
  }
}

provide(MENU_CONTENT_INJECTION_KEY, {
  onItemEnter: (event: PointerEvent) => {
    if (isPointerMovingToSubmenu(event))
      event.preventDefault()
  },
  onItemLeave: (event: PointerEvent) => {
    if (isPointerMovingToSubmenu(event))
      return
    contentElement.value?.focus()
    currentItemId.value = null
  },
  onTriggerLeave: (event: PointerEvent) => {
    if (isPointerMovingToSubmenu(event))
      event.preventDefault()
  },
  searchRef,
  pointerGraceTimerRef,
  onPointerGraceIntentChange: (intent: GraceIntent | null) => {
    pointerGraceIntentRef.value = intent
  },
})
</script>

<template>
  <FocusScope
    as-child
    :trapped="trapFocus"
    @mount-auto-focus="handleMountAutoFocus"
    @unmount-auto-focus="emits('closeAutoFocus', $event)"
  >
    <DismissableLayer
      as-child
      :disable-outside-pointer-events="disableOutsidePointerEvents"
      @escape-key-down="emits('escapeKeyDown', $event)"
      @pointer-down-outside="emits('pointerDownOutside', $event)"
      @focus-outside="emits('focusOutside', $event)"
      @interact-outside="emits('interactOutside', $event)"
      @dismiss="emits('dismiss')"
    >
      <RovingFocusGroup
        v-model:current-tab-stop-id="currentItemId"
        as-child
        orientation="vertical"
        :dir="rootContext?.dir.value"
        :loop="loop"
        @entry-focus="(event) => {
          emits('entryFocus', event)
          // only focus first item when using keyboard
          if (!rootContext?.isUsingKeyboardRef.value) event.preventDefault();
        }"
      >
        <PopperContent
          ref="primitiveElement"
          role="menu"
          :as="as"
          :as-child="asChild"
          aria-orientation="vertical"
          data-radix-menu-content
          :data-state="getOpenState(context!.open.value)"
          :dir="rootContext!.dir.value"
          :side="side"
          :side-offset="sideOffset"
          :align="align"
          :align-offset="alignOffset"
          :avoid-collisions="avoidCollisions"
          :collision-boundary="collisionBoundary"
          :collision-padding="collisionPadding"
          :arrow-padding="arrowPadding"
          :sticky="sticky"
          :hide-when-detached="hideWhenDetached"
          @keydown="handleKeyDown"
          @blur="handleBlur"
          @pointermove="handlePointerMove"
        >
          <slot />
        </PopperContent>
      </RovingFocusGroup>
    </DismissableLayer>
  </FocusScope>
</template>
