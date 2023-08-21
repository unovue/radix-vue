import { unrefElement } from '@vueuse/core'
import { type InjectionKey, type Ref, inject, provide } from 'vue'

const ITEM_DATA_ATTR = 'data-radix-vue-collection-item'

interface ContextValue {
  collectionRef: Ref<HTMLElement | undefined> | undefined
}

export const COLLECTION_SYMBOL = Symbol() as InjectionKey<ContextValue>

export function useCollection() {
  const createCollection = (elementRef?: Ref<HTMLElement | undefined>) => {
    provide(COLLECTION_SYMBOL, {
      collectionRef: elementRef,
    })
  }

  const context = inject(COLLECTION_SYMBOL)
  const setCollection = (
    elementRef: Ref<HTMLElement | undefined> | undefined,
  ) => {
    if (context)
      context.collectionRef = elementRef
  }

  const getItems = (contentElement?: HTMLElement) => {
    const collectionNode
      = contentElement ?? unrefElement(context?.collectionRef)

    if (!collectionNode)
      return []
    return Array.from(
      collectionNode.querySelectorAll(
        `[${ITEM_DATA_ATTR}]:not([data-disabled])`,
      ),
    ) as HTMLElement[]
  }

  return { createCollection, setCollection, getItems }
}
