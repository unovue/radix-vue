<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import type { Orientation } from './utils'
import { injectNavigationMenuContext, provideNavigationMenuContext } from './NavigationMenuRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { useCollection } from '@/shared'

export interface NavigationMenuSubProps extends PrimitiveProps {
  modelValue?: string
  defaultValue?: string
  orientation?: Orientation
}
export type NavigationMenuSubEmits = {
  'update:modelValue': [value: string]
}

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
const { primitiveElement, currentElement } = usePrimitiveElement()

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
    ref="primitiveElement"
    :data-orientation="orientation"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
