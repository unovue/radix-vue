type DataOrientation = 'vertical' | 'horizontal'
type Direction = 'ltr' | 'rtl'
/**
 * @deprecated Use `AccordionType` instead
 */
type Type = 'single' | 'multiple'
type SingleOrMultipleType = 'single' | 'multiple'

interface SingleOrMultipleProps<ValidValue = string | string[], ExplicitType = SingleOrMultipleType> {
  /** Determines whether a single or multiple items can be pressed at a time. */
  type?: ValidValue extends string
    ? 'single'
    : ValidValue extends string[]
      ? 'multiple'
      : ExplicitType extends 'single'
        ? 'single'
        : ExplicitType extends 'multiple'
          ? 'multiple'
          : never

  /** The controlled value of the item to select when type is "single" or the controlled values of the items to select when type is "multiple". Use this when you need to control the state of the items. Use it with `v-model` */
  modelValue?: ValidValue

  /** The controlled value of the active item  */
  defaultValue?: ValidValue

}

type ScrollBodyOption = {
  padding?: boolean | number
  margin?: boolean | number
}

export type { DataOrientation, Direction, Type, SingleOrMultipleProps, SingleOrMultipleType, ScrollBodyOption }
