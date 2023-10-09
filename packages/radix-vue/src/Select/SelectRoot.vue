<script lang="ts">
import type { InjectionKey, Ref, VNode } from 'vue'
import type { DataOrientation, Direction } from '../shared/types'
import BubbleSelect from './BubbleSelect.vue'
import { useDirection, useFormControl, useId } from '@/shared'

export interface SelectRootProps {
  open?: boolean
  defaultOpen?: boolean
  defaultValue?: string
  modelValue?: string
  orientation?: DataOrientation
  dir?: Direction
  name?: string
  autocomplete?: string
  disabled?: boolean
  required?: boolean
}
export type SelectRootEmits = {
  'update:modelValue': [value: string]
  'update:open': [value: boolean]
}

export const SELECT_INJECTION_KEY
  = Symbol() as InjectionKey<SelectProvideValue>

export interface SelectProvideValue {
  triggerElement: Ref<HTMLElement | undefined>
  onTriggerChange(node: HTMLElement | undefined): void
  valueElement: Ref<HTMLElement | undefined>
  onValueElementChange(node: HTMLElement): void
  valueElementHasChildren: Ref<boolean>
  onValueElementHasChildrenChange(hasChildren: boolean): void
  contentId: string
  modelValue?: Ref<string>
  onValueChange(value: string): void
  open: Ref<boolean>
  required?: Ref<boolean>
  onOpenChange(open: boolean): void
  dir: Ref<Direction>
  triggerPointerDownPosRef: Ref<{ x: number; y: number } | null>
  disabled?: Ref<boolean>
}

export interface SelectNativeOptionsContextValue {
  onNativeOptionAdd(option: VNode): void
  onNativeOptionRemove(option: VNode): void
}

export const SELECT_NATIVE_OPTIONS_INJECTION_KEY
  = Symbol() as InjectionKey<SelectNativeOptionsContextValue>
</script>

<script setup lang="ts">
import { computed, provide, ref, toRefs } from 'vue'
import { PopperRoot } from '@/Popper'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<SelectRootProps>(), {
  orientation: 'vertical',
  defaultValue: '',
  modelValue: undefined,
  open: undefined,
})

const emits = defineEmits<SelectRootEmits>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
}) as Ref<string>

const open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
})

const triggerElement = ref<HTMLElement>()
const valueElement = ref<HTMLElement>()
const triggerPointerDownPosRef = ref({
  x: 0,
  y: 0,
})
const valueElementHasChildren = ref(false)

const { required, disabled, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)
provide<SelectProvideValue>(SELECT_INJECTION_KEY, {
  triggerElement,
  onTriggerChange: (node: HTMLElement | undefined) => {
    triggerElement.value = node
  },
  valueElement,
  onValueElementChange: (node: HTMLElement | undefined) => {
    valueElement.value = node
  },
  valueElementHasChildren,
  onValueElementHasChildrenChange: (hasChildren: boolean) => {
    valueElementHasChildren.value = hasChildren
  },
  contentId: useId(),
  modelValue,
  onValueChange: (value: string) => {
    modelValue.value = value
  },
  open,
  required,
  onOpenChange: (value: boolean) => {
    open.value = value
  },
  dir,
  triggerPointerDownPosRef,
  disabled,
})

const isFormControl = useFormControl(triggerElement)
const nativeOptionsSet = ref<Set<VNode>>(new Set())

// The native `select` only associates the correct default value if the corresponding
// `option` is rendered as a child **at the same time** as itself.
// Because it might take a few renders for our items to gather the information to build
// the native `option`(s), we generate a key on the `select` to make sure React re-builds it
// each time the options change.
const nativeSelectKey = computed(() => {
  return Array.from(nativeOptionsSet.value)
    .map(option => option.props?.value)
    .join(';')
})

provide(SELECT_NATIVE_OPTIONS_INJECTION_KEY, {
  onNativeOptionAdd: (option) => {
    nativeOptionsSet.value.add(option)
  },
  onNativeOptionRemove: (option) => {
    nativeOptionsSet.value.delete(option)
  },
})
</script>

<template>
  <PopperRoot>
    <slot />

    <BubbleSelect
      v-if="isFormControl"
      :key="nativeSelectKey"
      v-bind="$attrs"
      aria-hidden
      tabindex="-1"
      :required="required"
      :name="name"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :value="modelValue"
      @change="modelValue = $event.target.value"
    >
      <option v-if="modelValue === undefined" value="" />
      <component
        v-bind="option.props"
        :is="option"
        v-for="option in Array.from(nativeOptionsSet)"
        :key="option.key ?? ''"
      />
    </BubbleSelect>
  </PopperRoot>
</template>
