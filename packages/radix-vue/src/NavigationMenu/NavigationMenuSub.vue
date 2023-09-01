<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import {
  injectNavigationMenuContext,
  provideNavigationMenuCollection,
  provideNavigationMenuContext,
} from './NavigationMenuRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import type { Orientation } from '@/shared/types'

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
  passive: true,
  defaultValue: props.defaultValue ?? '',
}) as Ref<string>
const previousValue = ref('')

const { primitiveElement, currentElement } = usePrimitiveElement()

const indicatorTrack = ref<HTMLElement>()
const viewport = ref<HTMLElement>()

provideNavigationMenuCollection(indicatorTrack)

const context = injectNavigationMenuContext()

provideNavigationMenuContext({
  ...context,
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
