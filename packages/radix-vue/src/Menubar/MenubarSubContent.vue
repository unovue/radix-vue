<script setup lang="ts">
import { inject } from 'vue'
import { MENUBAR_INJECTION_KEY } from './MenubarRoot.vue'
import { MENUBAR_MENU_INJECTION_KEY } from './MenubarMenu.vue'
import {
  MenuSubContent,
  type MenuSubContentEmits,
  type MenuSubContentProps,
} from '@/Menu'
import { PopperContentPropsDefaultValue } from '@/Popper'
import { useCollection } from '@/shared'
import { wrapArray } from '@/shared/useTypeahead'

export interface MenubarSubContentProps extends MenuSubContentProps {}
export type MenubarSubContentEmits = MenuSubContentEmits

const props = withDefaults(defineProps<MenubarSubContentProps>(), {
  ...PopperContentPropsDefaultValue,
})
const emits = defineEmits<MenubarSubContentEmits>()

const { injectCollection } = useCollection('menubar')

const context = inject(MENUBAR_INJECTION_KEY)
const menuContext = inject(MENUBAR_MENU_INJECTION_KEY)
const collections = injectCollection()

function handleArrowNavigation(event: KeyboardEvent) {
  const target = event.target as HTMLElement
  const targetIsSubTrigger = target.hasAttribute(
    'data-radix-menubar-subtrigger',
  )

  // Prevent navigation when we're opening a submenu
  if (targetIsSubTrigger)
    return

  let candidateValues = collections.value.map(i => i.dataset.value)

  const currentIndex = candidateValues.indexOf(menuContext?.value)

  candidateValues = context?.loop.value
    ? wrapArray(candidateValues, currentIndex + 1)
    : candidateValues.slice(currentIndex + 1)

  const [nextValue] = candidateValues
  if (nextValue)
    context?.onMenuOpen(nextValue)
}
</script>

<template>
  <MenuSubContent
    v-bind="{ ...props, ...emits }"
    data-radix-menubar-content=""
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
    @keydown.arrow-right="handleArrowNavigation"
  >
    <slot />
  </MenuSubContent>
</template>
