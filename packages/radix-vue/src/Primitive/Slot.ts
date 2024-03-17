import { cloneVNode, defineComponent, mergeProps } from 'vue'
import { renderSlotFragments } from '@/shared'

export const Slot = defineComponent({
  name: 'PrimitiveSlot',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      if (!slots.default)
        return null
      const childrens = renderSlotFragments(slots.default())

      const [firstChildren, ...otherChildren] = childrens

      if (firstChildren) {
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
