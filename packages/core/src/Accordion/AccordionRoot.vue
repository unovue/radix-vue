<script lang="ts">
import type { ComputedRef, Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import type { AcceptableValue, DataOrientation, Direction, SingleOrMultipleType, SingleOrMultipleTypeProps } from '@/shared/types'
import { createContext, useDirection, useForwardExpose } from '@/shared'

export interface AccordionRootProps<S extends SingleOrMultipleType = SingleOrMultipleType, T = string>
  extends PrimitiveProps, SingleOrMultipleTypeProps<S, T> {
  /**
   * When type is "single", allows closing content when clicking trigger for an open item.
   * When type is "multiple", this prop has no effect.
   *
   * @defaultValue false
   */
  collapsible?: boolean

  /**
   * When `true`, prevents the user from interacting with the accordion and all its items
   *
   * @defaultValue false
   */
  disabled?: boolean

  /**
   * The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.
   *
   * @defaultValue "ltr"
   */
  dir?: Direction

  /**
   * The orientation of the accordion.
   *
   * @defaultValue "vertical"
   */
  orientation?: DataOrientation

  /**
   * When `true`, the element will be unmounted on closed state.
   *
   * @defaultValue `true`
   */
  unmountOnHide?: boolean
}

export type AccordionRootEmits<S extends SingleOrMultipleType = SingleOrMultipleType> = {
  /**
   * Event handler called when the expanded state of an item changes
   */
  'update:modelValue': [value: (S extends 'single' ? string : string[]) | undefined]
}

export type AccordionRootContext<P extends AccordionRootProps> = {
  disabled: Ref<P['disabled']>
  direction: Ref<P['dir']>
  orientation: P['orientation']
  parentElement: Ref<HTMLElement | undefined>
  changeModelValue: (value: string) => void
  isSingle: ComputedRef<boolean>
  modelValue: Ref<AcceptableValue | AcceptableValue[] | undefined>
  collapsible: boolean
  unmountOnHide: Ref<boolean>
}

export const [injectAccordionRootContext, provideAccordionRootContext]
  = createContext<AccordionRootContext<AccordionRootProps>>('AccordionRoot')
</script>

<script setup lang="ts" generic="S extends SingleOrMultipleType = SingleOrMultipleType, T extends string = string">
import { Primitive } from '@/Primitive'
import { useSingleOrMultipleValue } from '@/shared/useSingleOrMultipleValue'
import { toRefs } from 'vue'

const props = withDefaults(defineProps<AccordionRootProps<S, T>>(), {
  disabled: false,
  orientation: 'vertical',
  collapsible: false,
  unmountOnHide: true,
})

const emits = defineEmits<AccordionRootEmits<S>>()

defineSlots<{
  default: (props: {
    /** Current active value */
    modelValue: SingleOrMultipleTypeProps<S, T>['modelValue']
  }) => any
}>()

const { dir, disabled, unmountOnHide } = toRefs(props)
const direction = useDirection(dir)

const { modelValue, changeModelValue, isSingle } = useSingleOrMultipleValue(props, emits)

const { forwardRef, currentElement: parentElement } = useForwardExpose()

provideAccordionRootContext({
  disabled,
  direction,
  orientation: props.orientation,
  parentElement,
  isSingle,
  collapsible: props.collapsible,
  modelValue,
  changeModelValue,
  unmountOnHide,
})
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as-child="asChild"
    :as="as"
  >
    <slot :model-value="modelValue as any" />
  </Primitive>
</template>
