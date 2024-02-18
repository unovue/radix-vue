type DataOrientation = 'vertical' | 'horizontal'
type Direction = 'ltr' | 'rtl'
/**
 * @deprecated Use `AccordionType` instead
 */
type Type = 'single' | 'multiple'
type AccordionType = 'single' | 'multiple'

type ScrollBodyOption = {
  padding?: boolean | number
  margin?: boolean | number
}

export type { DataOrientation, Direction, Type, AccordionType, ScrollBodyOption }
