import type { Instruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item'

export type TreeItem = {
  title: string
  icon: string
  children?: TreeItem[]
}

export type TreeAction =
  | {
    type: 'instruction'
    instruction: Instruction
    itemId: string
    targetId: string
  }
  | {
    type: 'toggle'
    itemId: string
  }
  | {
    type: 'expand'
    itemId: string
  }
  | {
    type: 'collapse'
    itemId: string
  }
  | { type: 'modal-move', itemId: string, targetId: string, index: number }

export const tree = {
  remove(data: TreeItem[], id: string): TreeItem[] {
    return data
      .filter(item => item.title !== id)
      .map((item) => {
        if (tree.hasChildren(item)) {
          return {
            ...item,
            children: tree.remove(item.children ?? [], id),
          }
        }
        return item
      })
  },
  insertBefore(data: TreeItem[], targetId: string, newItem: TreeItem): TreeItem[] {
    return data.flatMap((item) => {
      if (item.title === targetId)
        return [newItem, item]

      if (tree.hasChildren(item)) {
        return {
          ...item,
          children: tree.insertBefore(item.children ?? [], targetId, newItem),
        }
      }
      return item
    })
  },
  insertAfter(data: TreeItem[], targetId: string, newItem: TreeItem): TreeItem[] {
    return data.flatMap((item) => {
      if (item.title === targetId)
        return [item, newItem]

      if (tree.hasChildren(item)) {
        return {
          ...item,
          children: tree.insertAfter(item.children ?? [], targetId, newItem),
        }
      }

      return item
    })
  },
  insertChild(data: TreeItem[], targetId: string, newItem: TreeItem): TreeItem[] {
    return data.flatMap((item) => {
      if (item.title === targetId) {
        // already a parent: add as first child
        return {
          ...item,
          // opening item so you can see where item landed
          isOpen: true,
          children: [newItem, ...item.children ?? []],
        }
      }

      if (!tree.hasChildren(item))
        return item

      return {
        ...item,
        children: tree.insertChild(item.children ?? [], targetId, newItem),
      }
    })
  },
  find(data: TreeItem[], itemId: string): TreeItem | undefined {
    for (const item of data) {
      if (item.title === itemId)
        return item

      if (tree.hasChildren(item)) {
        const result = tree.find(item.children ?? [], itemId)
        if (result)
          return result
      }
    }
  },
  getPathToItem({
    current,
    targetId,
    parentIds = [],
  }: {
    current: TreeItem[]
    targetId: string
    parentIds?: string[]
  }): string[] | undefined {
    for (const item of current) {
      if (item.title === targetId)
        return parentIds

      const nested = tree.getPathToItem({
        current: (item.children ?? []),
        targetId,
        parentIds: [...parentIds, item.title],
      })
      if (nested)
        return nested
    }
  },
  hasChildren(item: TreeItem): boolean {
    return (item.children ?? []).length > 0
  },
}

export function updateTree(data: TreeItem[], action: TreeAction) {
  // eslint-disable-next-line no-console
  console.log('action', action)

  const item = tree.find(data, action.itemId)
  if (!item)
    return data

  if (action.type === 'instruction') {
    const instruction = action.instruction

    if (instruction.type === 'reparent') {
      const path = tree.getPathToItem({
        current: data,
        targetId: action.targetId,
      })
      if (!path) {
        console.error(`missing ${path}`)
        return
      }

      const desiredId = path[instruction.desiredLevel]
      let result = tree.remove(data, action.itemId)
      result = tree.insertAfter(result, desiredId, item)
      return result
    }

    // the rest of the actions require you to drop on something else
    if (action.itemId === action.targetId)
      return data

    if (instruction.type === 'reorder-above') {
      let result = tree.remove(data, action.itemId)
      result = tree.insertBefore(result, action.targetId, item)
      return result
    }

    if (instruction.type === 'reorder-below') {
      let result = tree.remove(data, action.itemId)
      result = tree.insertAfter(result, action.targetId, item)
      return result
    }

    if (instruction.type === 'make-child') {
      let result = tree.remove(data, action.itemId)
      result = tree.insertChild(result, action.targetId, item)
      return result
    }

    console.warn('TODO: action not implemented', instruction)

    return data
  }

  if (action.type === 'modal-move') {
    let result = tree.remove(data, item.title)

    const siblingItems = getChildItems(result, action.targetId) ?? []

    if (siblingItems.length === 0) {
      if (action.targetId === '') {
        /**
         * If the target is the root level, and there are no siblings, then
         * the item is the only thing in the root level.
         */
        result = [item]
      }
      else {
        /**
         * Otherwise for deeper levels that have no children, we need to
         * use `insertChild` instead of inserting relative to a sibling.
         */
        result = tree.insertChild(result, action.targetId, item)
      }
    }
    else if (action.index === siblingItems.length) {
      const relativeTo = siblingItems[siblingItems.length - 1]
      /**
       * If the position selected is the end, we insert after the last item.
       */
      result = tree.insertAfter(result, relativeTo.title, item)
    }
    else {
      const relativeTo = siblingItems[action.index]
      /**
       * Otherwise we insert before the existing item in the given position.
       * This results in the new item being in that position.
       */
      result = tree.insertBefore(result, relativeTo.title, item)
    }

    return result
  }

  return data
}

function getChildItems(data: TreeItem[], targetId: string) {
  /**
   * An empty string is representing the root
   */
  if (targetId === '')
    return data

  const targetItem = tree.find(data, targetId)
  if (!targetItem) {
    console.error(`missing ${targetItem}`)
    return
  }

  return targetItem.children
}
