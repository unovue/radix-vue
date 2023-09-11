<script setup lang="ts">
import { computed } from 'vue'
import { injectTabsContext } from './TabsRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
} from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'
import { makeContentId, makeTriggerId } from './utils'

export interface TabsTriggerProps extends PrimitiveProps {
  value: string
  disabled?: boolean
}

const props = withDefaults(defineProps<TabsTriggerProps>(), {
  disabled: false,
  as: 'button',
})
const context = injectTabsContext()

const triggerId = computed(() => makeTriggerId(context.baseId, props.value))
const contentId = computed(() => makeContentId(context.baseId, props.value))

const isSelected = computed(() => props.value === context.modelValue.value)
</script>

<template>
  <RovingFocusItem as-child :focusable="!disabled" :active="isSelected">
    <Primitive
      :id="triggerId"
      role="tab"
      :type="as === 'button' ? 'button' : undefined"
      :as="as"
      :as-child="asChild"
      :aria-selected="isSelected ? 'true' : 'false'"
      :aria-controls="contentId"
      :data-state="isSelected ? 'active' : 'inactive'"
      :disabled="disabled"
      :data-disabled="disabled ? '' : undefined"
      :data-orientation="context.orientation.value"
      @mousedown.left="(event) => {
        // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
        // but not when the control key is pressed (avoiding MacOS right click)
        if (!disabled && event.ctrlKey === false) {
          context.changeModelValue(value);
        }
        else {
          // prevent focus to avoid accidental activation
          event.preventDefault();
        }
      }"
      @keydown.enter.space="context.changeModelValue(value)"
      @focus="() => {
        // handle 'automatic' activation if necessary
        // ie. activate tab following focus
        const isAutomaticActivation = context.activationMode !== 'manual';
        if (!isSelected && !disabled && isAutomaticActivation) {
          context.changeModelValue(value);
        }
      }"
    >
      <slot />
    </Primitive>
  </RovingFocusItem>
</template>
