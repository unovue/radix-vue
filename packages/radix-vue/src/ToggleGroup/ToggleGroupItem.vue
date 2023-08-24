<script lang="ts">
export interface ToggleGroupItemProps extends ToggleProps {
  /**
   * A string value for the toggle group item. All items within a toggle group should use a unique value.
   */
  value: string
}
</script>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { TOGGLE_GROUP_INJECTION_KEY } from './ToggleGroupRoot.vue'
import { Toggle, type ToggleProps } from '@/Toggle'
import { RovingFocusItem } from '@/RovingFocus'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<ToggleGroupItemProps>(), {
  as: 'button',
})

const context = inject(TOGGLE_GROUP_INJECTION_KEY)
const disabled = computed(() => context?.disabled?.value || props.disabled)
</script>

<template>
  <component
    :is="context?.rovingFocus.value ? RovingFocusItem : Primitive"
    as-child
    :focusable="!disabled"
    :active="pressed"
  >
    <Toggle
      v-bind="props"
      :disabled="disabled"
      :pressed="
        context?.type === 'single'
          ? context?.modelValue.value === value
          : context?.modelValue.value?.includes(value)
      "
      @update:pressed="context?.changeModelValue(value)"
    >
      <slot />
    </Toggle>
  </component>
</template>
