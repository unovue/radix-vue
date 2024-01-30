<script lang="ts">
import type { Ref } from 'vue'
import type { Orientation } from './utils'
import type { PrimitiveProps } from '@/Primitive'

export type NavigationMenuSubEmits = {
  /** Event handler called when the value changes. */
  'update:modelValue': [value: string]
}

export interface NavigationMenuSubProps extends PrimitiveProps {
  /** The controlled value of the sub menu item to activate. Can be used as `v-model`. */
  modelValue?: string
  /** The value of the menu item that should be active when initially rendered.
   *
   * Use when you do not need to control the value state. */
  defaultValue?: string
  /** The orientation of the menu. */
  orientation?: Orientation
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { injectNavigationMenuContext, provideNavigationMenuContext } from './NavigationMenuRoot.vue'
import {
  Primitive,
} from '@/Primitive'
import { useCollection, useForwardExpose } from '@/shared'

const props = withDefaults(defineProps<NavigationMenuSubProps>(), {
  orientation: 'horizontal',
})
const emits = defineEmits<NavigationMenuSubEmits>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? '',
  passive: (props.modelValue === undefined) as false,
}) as Ref<string>
const previousValue = ref('')

const menuContext = injectNavigationMenuContext()
const { forwardRef, currentElement } = useForwardExpose()

const indicatorTrack = ref<HTMLElement>()
const viewport = ref<HTMLElement>()

const { createCollection } = useCollection('nav')
createCollection(indicatorTrack)

provideNavigationMenuContext({
  ...menuContext,
  isRootMenu: false,
  modelValue,
  previousValue,
  orientation: props.orientation,
  rootNavigationMenu: currentElement,
  indicatorTrack,
  onIndicatorTrackChange: (val) => {
    indicatorTrack.value = val
  },
  viewport,
  onViewportChange: (val) => {
    viewport.value = val
  },

  onTriggerEnter: (val) => {
    modelValue.value = val
  },
  onTriggerLeave: () => {
    // do nothing for submenu
  },
  onContentEnter: () => {
    // do nothing for submenu
  },
  onContentLeave: () => {
    // do nothing for submenu
  },
  onItemSelect: (val) => {
    modelValue.value = val
  },
  onItemDismiss: () => {
    modelValue.value = ''
  },
})
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :data-orientation="orientation"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
