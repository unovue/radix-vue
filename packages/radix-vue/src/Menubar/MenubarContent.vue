<script lang="ts">
import type { MenuContentEmits, MenuContentProps } from '@/Menu'

export type MenubarContentEmits = MenuContentEmits

export interface MenubarContentProps extends MenuContentProps {}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { injectMenubarRootContext } from './MenubarRoot.vue'
import { injectMenubarMenuContext } from './MenubarMenu.vue'
import { MenuContent } from '@/Menu'
import { useCollection, useForwardExpose, useForwardPropsEmits, useId } from '@/shared'
import { wrapArray } from '@/shared/useTypeahead'

const props = withDefaults(defineProps<MenubarContentProps>(), {
  align: 'start',
})
const emits = defineEmits<MenubarContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
useForwardExpose()

const rootContext = injectMenubarRootContext()
const menuContext = injectMenubarMenuContext()

menuContext.contentId ||= useId(undefined, 'radix-vue-menubar-content')

const { injectCollection } = useCollection('menubar')
const collections = injectCollection()

const hasInteractedOutsideRef = ref(false)

function handleArrowNavigation(event: KeyboardEvent) {
  const target = event.target as HTMLElement
  const targetIsSubTrigger = target.hasAttribute(
    'data-radix-menubar-subtrigger',
  )

  const prevMenuKey = rootContext.dir.value === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
  const isPrevKey = prevMenuKey === event.key
  const isNextKey = !isPrevKey

  // Prevent navigation when we're opening a submenu
  if (isNextKey && targetIsSubTrigger)
    return

  let candidateValues = collections.value.map(i => i.dataset.value)
  if (isPrevKey)
    candidateValues.reverse()

  const currentIndex = candidateValues.indexOf(menuContext.value)

  candidateValues = rootContext.loop.value
    ? wrapArray(candidateValues, currentIndex + 1)
    : candidateValues.slice(currentIndex + 1)

  const [nextValue] = candidateValues
  if (nextValue)
    rootContext.onMenuOpen(nextValue)
}
</script>

<template>
  <MenuContent
    v-bind="forwarded"
    :id="menuContext.contentId"
    data-radix-menubar-content=""
    :aria-labelledby="menuContext.triggerId"
    :style="{
      '--radix-menubar-content-transform-origin':
        'var(--radix-popper-transform-origin)',
      '--radix-menubar-content-available-width':
        'var(--radix-popper-available-width)',
      '--radix-menubar-content-available-height':
        'var(--radix-popper-available-height)',
      '--radix-menubar-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-menubar-trigger-height': 'var(--radix-popper-anchor-height)',
    }"
    @close-auto-focus="(event) => {
      const menubarOpen = Boolean(rootContext.modelValue.value);
      if (!menubarOpen && !hasInteractedOutsideRef) {
        menuContext.triggerElement.value?.focus();
      }

      hasInteractedOutsideRef = false;
      // Always prevent auto focus because we either focus manually or want user agent focus
      event.preventDefault();
    }"
    @focus-outside="(event) => {
      const target = event.target as HTMLElement;
      const isMenubarTrigger = collections.some((item) => item.contains(target));
      if (isMenubarTrigger) event.preventDefault();
    }"
    @interact-outside="
      (event) => {
        hasInteractedOutsideRef = true;
      }
    "
    @entry-focus="(event) => {
      if (!menuContext.wasKeyboardTriggerOpenRef.value) event.preventDefault()
    }"
    @keydown.arrow-right.arrow-left="handleArrowNavigation"
  >
    <slot />
  </MenuContent>
</template>
