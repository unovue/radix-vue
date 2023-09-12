import { Fragment, type VNode } from 'vue'

function getChildNodeRecursive(children?: VNode[], target?: string): VNode[] {
  if (!children)
    return []

  return children.flatMap((child) => {
    if (child.type === Fragment)
      return getChildNodeRecursive(child.children as VNode[], target)

    // @ts-expect-error these TODO: type properly
    else if (child.type.__name === target)
      return [child]

    // @ts-expect-error these TODO: type properly
    else if (child.children?.default)
    // @ts-expect-error these TODO: type properly
      return getChildNodeRecursive((child.children)?.default?.() as VNode[], target)

    else return [child]
  })
}

export function getChildNode(children?: VNode[], target?: string) {
  // @ts-expect-error these TODO: type properly
  return getChildNodeRecursive(children, target).filter(i => i.type.__name === target)
}
