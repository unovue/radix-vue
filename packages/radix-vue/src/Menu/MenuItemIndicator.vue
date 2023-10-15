<script lang="ts">
import { createContext } from '@/shared'

interface MenuItemIndicatorContext {
  checked: Ref<CheckedState>
}

export const [injectMenuItemIndicatorContext, provideMenuItemIndicatorContext]
  = createContext<MenuItemIndicatorContext>(
    ['MenuCheckboxItem', 'MenuRadioItem'], 'MenuItemIndicatorContext',
  )
</script>

<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type CheckedState, getCheckedState, isIndeterminate } from './utils'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { Presence } from '@/Presence'

export interface MenuItemIndicatorProps extends PrimitiveProps {}

withDefaults(defineProps<MenuItemIndicatorProps>(), {
  as: 'span',
})

const indicatorContext = injectMenuItemIndicatorContext({
  checked: ref(false),
})
</script>

<template>
  <Presence
    :present="
      isIndeterminate(indicatorContext.checked.value)
        || indicatorContext.checked.value === true
    "
  >
    <Primitive
      :as="as"
      :as-child="asChild"
      :data-state="getCheckedState(indicatorContext.checked.value)"
    >
      <slot />
    </Primitive>
  </Presence>
</template>
