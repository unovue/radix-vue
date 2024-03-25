import { type VNode, cloneVNode, defineComponent, mergeProps } from 'vue'
import { renderSlotFragments } from '@/shared'

function groupChildren(children: VNode[]) {
  let firstChildren: VNode | undefined
  const commentChildrenBeforeFirst: VNode[] = []
  const otherChildren: VNode[] = []

  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    if (!firstChildren) {
      if (child.type === Symbol.for('v-cmt')) { // check if the vnode is comment type (https://github.com/vuejs/core/blob/caeb8a68811a1b0f799632582289fcf169fb673c/packages/runtime-core/src/vnode.ts#L66)
        commentChildrenBeforeFirst.push(child)
        continue
      }
      firstChildren = child
    }
    else {
      otherChildren.push(child)
    }
  }
  return { firstChildren, otherChildren, commentChildrenBeforeFirst }
}

export const Slot = defineComponent({
  name: 'PrimitiveSlot',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      if (!slots.default)
        return null
      const children = renderSlotFragments(slots.default())
      const { firstChildren, otherChildren, commentChildrenBeforeFirst } = groupChildren(children)

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

        if (commentChildrenBeforeFirst.length)
          return [...commentChildrenBeforeFirst, cloned, ...otherChildren]

        return [cloned, ...otherChildren]
      }

      return children
    }
  },
})
