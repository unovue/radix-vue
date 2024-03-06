<script lang="ts">
import type { Ref } from 'vue'

import type { PrimitiveProps } from '@/Primitive'
import type { Direction, Orientation } from './utils'
import { createContext, useCollection, useDirection, useForwardExpose, useId } from '@/shared'

export interface NavigationMenuRootProps extends PrimitiveProps {
  /** The controlled value of the menu item to activate. Can be used as `v-model`. */
  modelValue?: string
  /** The value of the menu item that should be active when initially rendered.
   *
   * Use when you do not need to control the value state. */
  defaultValue?: string
  /** The reading direction of the combobox when applicable.
   *
   *  If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** The orientation of the menu. */
  orientation?: Orientation
  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened.
   * @defaultValue 200
   */
  delayDuration?: number
  /**
   * How much time a user has to enter another trigger without incurring a delay again.
   * @defaultValue 300
   */
  skipDelayDuration?: number
}
export type NavigationMenuRootEmits = {
  /** Event handler called when the value changes. */
  'update:modelValue': [value: string]
}

export interface NavigationMenuContext {
  isRootMenu: boolean
  modelValue: Ref<string>
  previousValue: Ref<string>
  baseId: string
  dir: Ref<Direction>
  orientation: Orientation
  rootNavigationMenu: Ref<HTMLElement | undefined>
  indicatorTrack: Ref<HTMLElement | undefined>
  onIndicatorTrackChange(indicatorTrack: HTMLElement | undefined): void
  viewport: Ref<HTMLElement | undefined>
  onViewportChange(viewport: HTMLElement | undefined): void
  onTriggerEnter(itemValue: string): void
  onTriggerLeave(): void
  onContentEnter(itemValue: string): void
  onContentLeave(): void
  onItemSelect(itemValue: string): void
  onItemDismiss(): void
}

export const [injectNavigationMenuContext, provideNavigationMenuContext]
  = createContext<NavigationMenuContext>(['NavigationMenuRoot', 'NavigationMenuSub'], 'NavigationMenuContext')
</script>

<script setup lang="ts">
import {
  computed,
  ref,
  toRefs,
} from 'vue'
import { refAutoReset, useDebounceFn, useVModel } from '@vueuse/core'
import {
  Primitive,
} from '@/Primitive'

const props = withDefaults(defineProps<NavigationMenuRootProps>(), {
  modelValue: undefined,
  delayDuration: 200,
  skipDelayDuration: 300,
  orientation: 'horizontal',
  as: 'nav',
})
const emits = defineEmits<NavigationMenuRootEmits>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? '',
  passive: (props.modelValue === undefined) as false,
}) as Ref<string>
const previousValue = ref('')

const { forwardRef, currentElement: rootNavigationMenu } = useForwardExpose()

const indicatorTrack = ref<HTMLElement>()
const viewport = ref<HTMLElement>()

const { createCollection } = useCollection('nav')
createCollection(indicatorTrack)

const { delayDuration, skipDelayDuration, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)

const isDelaySkipped = refAutoReset(false, skipDelayDuration)
const computedDelay = computed(() => {
  const isOpen = modelValue.value !== ''
  if (isOpen || isDelaySkipped.value)
    return 150 // 150ms for user to switch trigger or move into content view
  else return delayDuration.value
})

const debouncedFn = useDebounceFn((val: string) => {
  previousValue.value = modelValue.value
  modelValue.value = val
}, computedDelay)

provideNavigationMenuContext({
  isRootMenu: true,
  modelValue,
  previousValue,
  baseId: useId(undefined, 'radix-navigation-menu'),
  dir,
  orientation: props.orientation,
  rootNavigationMenu,
  indicatorTrack,
  onIndicatorTrackChange: (val) => {
    indicatorTrack.value = val
  },
  viewport,
  onViewportChange: (val) => {
    viewport.value = val
  },
  onTriggerEnter: (val) => {
    debouncedFn(val)
  },
  onTriggerLeave: () => {
    isDelaySkipped.value = true
    debouncedFn('')
  },
  onContentEnter: (val) => {
    debouncedFn(val)
  },
  onContentLeave: () => {
    debouncedFn('')
  },
  onItemSelect: (val) => {
    // When selecting item we trigger update immediately
    previousValue.value = modelValue.value
    modelValue.value = val
  },
  onItemDismiss: () => {
    previousValue.value = modelValue.value
    modelValue.value = ''
  },
})
</script>

<template>
  <Primitive
    :ref="forwardRef"
    aria-label="Main"
    :as="as"
    :as-child="asChild"
    :data-orientation="orientation"
    :dir="dir"
  >
    <slot />
  </Primitive>
</template>
