type DataOrientation = 'vertical' | 'horizontal'
type Direction = 'ltr' | 'rtl'
type SingleOrMultipleType = 'single' | 'multiple'

// Type helper to determine the value type based on selection mode
type ValueType<U extends SingleOrMultipleType, T> = U extends 'single'
  ? T
  : T[]

// Type helper to determine the value type based on selection mode
type ValueType2<U extends boolean, T> = U extends false
  ? T
  : T[]

interface SingleOrMultipleTypeProps<U extends SingleOrMultipleType = SingleOrMultipleType, T = any> {
  /**
   * Determines whether a "single" or "multiple" items can be selected at a time.
   *
   * This prop will overwrite the inferred type from `modelValue` and `defaultValue`.
   */
  type?: U

  /**
   * The controlled value of the active item(s).
   *
   * Use this when you need to control the state of the items. Can be binded with `v-model`
   */
  modelValue?: ValueType<U, T>

  /**
   * The default active value of the item(s).
   *
   * Use when you do not need to control the state of the item(s).
   */
  defaultValue?: ValueType<U, T>
}

interface SingleOrMultipleProps<S extends boolean = boolean, T = any> {
  /** Whether multiple options can be selected or not. */
  multiple?: S

  /**
   * The controlled value of the active item(s).
   *
   * Use this when you need to control the state of the items. Can be binded with `v-model`
   */
  modelValue?: ValueType2<S, T>

  /**
   * The default active value of the item(s).
   *
   * Use when you do not need to control the state of the item(s).
   */
  defaultValue?: ValueType2<S, T>
}

/**
 * if padding or margin is number, it will be in px
 * if padding or margin is true, it will be var(--scrollbar-width)
 * otherwise, it will be passed string
 */
type ScrollBodyOption = {
  padding?: boolean | number | string
  margin?: boolean | number | string
}

// Exclude `boolean` type to prevent type casting
// reference: https://vuejs.org/guide/components/props.html#boolean-casting
type AcceptableValue = string | number | Record<string, any> | null
type ArrayOrWrapped<T> = T extends any[] ? T : Array<T>
type StringOrNumber = string | number

// Temporary solution for InstanceType complains about generic components. Reference: https://github.com/vuejs/language-tools/issues/3206#issuecomment-2188687250
import type { DefineComponent } from 'vue'

type GenericComponentInstance<T> = T extends new (...args: any[]) => infer R
  ? R
  : T extends (...args: any[]) => infer R
    ? R extends { __ctx?: infer K }
      ? Exclude<K, void> extends { expose: (...args: infer Y) => void }
        ? Y[0] & InstanceType<DefineComponent>
        : any
      : any
    : any

interface FormFieldProps {
  /** The name of the field. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** When `true`, indicates that the user must set the value before the owning form can be submitted. */
  required?: boolean
}

export type { AcceptableValue, ArrayOrWrapped, DataOrientation, Direction, SingleOrMultipleTypeProps, SingleOrMultipleType, SingleOrMultipleProps, ScrollBodyOption, StringOrNumber, GenericComponentInstance, FormFieldProps }
