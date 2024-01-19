<script lang="ts">
import type { Ref } from 'vue'
import type { Orientation } from './utils'
import type { PrimitiveProps } from '@/Primitive'

export type NavigationMenuSubEmits = {
  'update:modelValue': [value: string]
}

export interface NavigationMenuSubProps extends PrimitiveProps {
  modelValue?: string
  defaultValue?: string
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
import { useCollection, useForwardRef } from '@/shared'

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
const { forwardRef, currentElement } = useForwardRef()

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
