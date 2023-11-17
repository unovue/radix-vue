import { type Component, type PropType, defineComponent, h } from 'vue'
import { Slot } from './Slot'

export type AsTag =
  | 'a'
  | 'button'
  | 'div'
  | 'form'
  | 'h2'
  | 'h3'
  | 'img'
  | 'input'
  | 'label'
  | 'li'
  | 'nav'
  | 'ol'
  | 'p'
  | 'span'
  | 'svg'
  | 'ul'
  | 'template'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | ({} & string) // any other string

export interface PrimitiveProps {
  /**
   * Setting "asChild" to true has the same effect as setting "as" to "template".
   * @default false
   */
  asChild?: boolean
  /**
   * @default "div"
   */
  as?: AsTag | Component
}

export const Primitive = defineComponent({
  name: 'Primitive',
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false,
    },
    as: {
      type: [String, Object] as PropType<AsTag | Component>,
      default: 'div',
    },
  },
  setup(props, { attrs, slots }) {
    const asTag = props.asChild ? 'template' : props.as

    if (asTag !== 'template')
      //  @ts-expect-error  ignoring the complain for Component type because it is an artificial type
      return () => h(props.as, attrs, { default: slots.default })

    return () => h(Slot, attrs, { default: slots.default })
  },
})
