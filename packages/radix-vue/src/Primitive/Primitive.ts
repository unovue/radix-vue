import {
  type IntrinsicElementAttributes,
  type PropType,
  cloneVNode,
  defineComponent,
  h,
  mergeProps,
} from 'vue'
import { isValidVNodeElement, renderSlotFragments } from '@/shared'

export type AsTag =
  | keyof IntrinsicElementAttributes
  | 'template'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | ({} & string) // any other string

function throwError(componentName: string) {
  throw new Error(
    [
      `Detected an invalid children for \`${componentName}\` with \`asChild\` prop.`,
      '',
      'Note: All components accepting `asChild` expect only one direct child of valid VNode type.',
      'You can apply a few solutions:',
      [
        'Provide a single child element so that we can forward the props onto that element.',
        'Ensure the first child is an actual element instead of a raw text node or comment node.',
      ]
        .map(line => `  - ${line}`)
        .join('\n'),
    ].join('\n'),
  )
}

export type PrimitiveProps = {
  /**
   * Setting "asChild" to true has the same effect as setting "as" to "template".
   * @default false
   */
  asChild?: boolean
  as?: AsTag
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
      type: String as PropType<AsTag>,
      default: 'div',
    },
  },
  setup(props, { attrs, slots }) {
    const asTag = props.asChild ? 'template' : props.as

    if (asTag !== 'template')
      return () => h(props.as, attrs, { default: slots.default })

    return () => {
      if (!slots.default)
        return null

      const childrens = renderSlotFragments(slots.default())

      const [firstChildren, ...otherChildren] = childrens
      if (!isValidVNodeElement(firstChildren))
        throwError(asTag)

      if (Object.keys(attrs).length > 0) {
        // remove props ref from being inferred
        delete firstChildren.props?.ref
        const mergedProps = mergeProps(attrs, firstChildren.props ?? {})
        // remove class to prevent duplicated
        if (attrs.class && firstChildren.props?.class)
          delete firstChildren.props.class

        const cloned = cloneVNode(firstChildren, mergedProps)
        // Explicitly override props starting with `on`.
        // It seems cloneVNode from Vue doesn't like overriding `onXXX` props. So
        // we have to do it manually.
        for (const prop in mergedProps) {
          if (prop.startsWith('on')) {
            cloned.props ||= {}
            cloned.props[prop] = mergedProps[prop]
          }
        }

        return childrens.length === 1 ? cloned : [cloned, ...otherChildren]
      }

      return childrens
    }
  },
})
