<script lang="ts">
import type { ToggleProps } from '@/Toggle'
import { useForwardExpose } from '@/shared'

export interface ToggleGroupItemProps extends ToggleProps {
  /**
   * A string value for the toggle group item. All items within a toggle group should use a unique value.
   */
  value: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { injectToggleGroupRootContext } from './ToggleGroupRoot.vue'
import { Toggle } from '@/Toggle'
import { RovingFocusItem } from '@/RovingFocus'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<ToggleGroupItemProps>(), {
  as: 'button',
})

const rootContext = injectToggleGroupRootContext()
const disabled = computed(() => rootContext.disabled?.value || props.disabled)
const pressed = computed(() => rootContext.modelValue.value?.includes(props.value))

const { forwardRef } = useForwardExpose()
</script>

<template>
  <component
    :is="rootContext.rovingFocus.value ? RovingFocusItem : Primitive"
    as-child
    :focusable="!disabled"
    :active="pressed"
  >
    <Toggle
      v-bind="props"
      :ref="forwardRef"
      :disabled="disabled"
      :pressed="
        rootContext.isSingle
          ? rootContext.modelValue.value === value
          : rootContext.modelValue.value?.includes(value)
      "
      @update:pressed="rootContext.changeModelValue(value)"
    >
      <slot />
    </Toggle>
  </component>
</template>
