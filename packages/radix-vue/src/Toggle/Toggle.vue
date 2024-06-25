<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export type ToggleEmits = {
  /** Event handler called when the value of the toggle changes. */
  'update:modelValue': [value: boolean]
}

export type DataState = 'on' | 'off'

export interface ToggleProps extends PrimitiveProps {
  /**
   * The pressed state of the toggle when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultValue?: boolean
  /**
   * The controlled pressed state of the toggle. Can be bind as `v-model`.
   */
  modelValue?: boolean
  /**
   * When `true`, prevents the user from interacting with the toggle.
   */
  disabled?: boolean
}
</script>

<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<ToggleProps>(), {
  modelValue: undefined,
  disabled: false,
  as: 'button',
})

const emits = defineEmits<ToggleEmits>()

defineSlots<{
  default: (props: {
    /** Current pressed state */
    modelValue: typeof modelValue.value
  }) => any
}>()

useForwardExpose()
const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
}) as Ref<boolean>

function togglePressed() {
  modelValue.value = !modelValue.value
}

const dataState = computed<DataState>(() => {
  return modelValue.value ? 'on' : 'off'
})
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    :as-child="props.asChild"
    :as="as"
    :aria-pressed="modelValue"
    :data-state="dataState"
    :data-disabled="disabled ? '' : undefined"
    :disabled="disabled"
    @click="togglePressed"
  >
    <slot :model-value="modelValue" />
  </Primitive>
</template>
