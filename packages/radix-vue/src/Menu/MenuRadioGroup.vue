<script lang="ts">
import { createContext } from '@/shared'

interface MenuRadioGroupContextValue {
  modelValue: Ref<string>
  onValueChange: (payload: string) => void
}

export const [injectMenuRadioGroupContext, provideMenuRadioGroupContext]
  = createContext<MenuRadioGroupContextValue>('MenuRadioGroup')
</script>

<script setup lang="ts">
import { type Ref } from 'vue'
import { useVModel } from '@vueuse/core'
import MenuGroup, { type MenuGroupProps } from './MenuGroup.vue'

export interface MenuRadioGroupProps extends MenuGroupProps {
  modelValue?: string
}
export type MenuRadioGroupEmits = {
  'update:modelValue': [payload: boolean]
}

const props = withDefaults(defineProps<MenuRadioGroupProps>(), {
  modelValue: '',
})
const emits = defineEmits<MenuRadioGroupEmits>()
const modelValue = useVModel(props, 'modelValue', emits)

provideMenuRadioGroupContext({
  modelValue,
  onValueChange: (ev) => {
    modelValue.value = ev
  },
})
</script>

<template>
  <MenuGroup v-bind="props">
    <slot />
  </MenuGroup>
</template>
