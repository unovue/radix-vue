<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export type ToggleEmits = {
  /** Event handler called when the pressed state of the toggle changes. */
  'update:pressed': [value: boolean]
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
  pressed?: boolean
  /**
   * When `true`, prevents the user from interacting with the toggle.
   */
  disabled?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<ToggleProps>(), {
  pressed: undefined,
  disabled: false,
  as: 'button',
})

const emits = defineEmits<ToggleEmits>()

useForwardExpose()
const pressed = useVModel(props, 'pressed', emits, {
  defaultValue: props.defaultValue,
  passive: (props.pressed === undefined) as false,
})

function togglePressed() {
  pressed.value = !pressed.value
}

const dataState = computed<DataState>(() => {
  return pressed.value ? 'on' : 'off'
})
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    :as-child="props.asChild"
    :as="as"
    :aria-pressed="pressed"
    :data-state="dataState"
    :data-disabled="disabled ? '' : undefined"
    :disabled="disabled"
    @click="togglePressed"
  >
    <slot />
  </Primitive>
</template>
