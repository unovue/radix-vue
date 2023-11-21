import { createContext } from '@/shared'
import { type ComponentPublicInstance, type Ref, defineComponent, h, ref, shallowRef, watch, watchEffect } from 'vue'
import { Slot, usePrimitiveElement } from '@/Primitive'

interface CollectionContext {
  collectionRef: Ref<HTMLElement | undefined>
  itemMap: Ref<Map<HTMLElement, ComponentPublicInstance>>
}

const ITEM_DATA_ATTR = 'data-radix-vue-collection-item'
export const [injectCollectionContext, provideCollectionContext]
  = createContext<CollectionContext>('CollectionProvider')

export function createCollection() {
  const itemMap = shallowRef<Map<HTMLElement, ComponentPublicInstance>>(new Map())
  const collectionRef = ref<HTMLElement>()
  const context = provideCollectionContext({
    collectionRef,
    itemMap,
  })
  const { getItems } = useCollection(context)
  return { getItems }
}

export const CollectionSlot = defineComponent({
  name: 'CollectionSlot',
  setup(_, { slots }) {
    const context = injectCollectionContext()
    const { primitiveElement, currentElement } = usePrimitiveElement()
    watch(currentElement, () => {
      context.collectionRef.value = currentElement.value
    })
    return () => h(Slot, { ref: primitiveElement }, slots)
  },
})

export const CollectionItem = defineComponent({
  name: 'CollectionItem',
  setup(_, { slots }) {
    const context = injectCollectionContext()
    const { primitiveElement, currentElement } = usePrimitiveElement()

    watchEffect((cleanupFn) => {
      if (currentElement.value) {
        context.itemMap.value.set(currentElement.value, primitiveElement.value!)
        cleanupFn(() => context.itemMap.value.delete(currentElement.value))
      }
    })

    return () => h(Slot, { [ITEM_DATA_ATTR]: '', ref: primitiveElement }, slots)
  },
})

export function useCollection(fallback?: CollectionContext) {
  const context = fallback ?? injectCollectionContext()

  const getItems = () => {
    const collectionNode = context.collectionRef.value
    if (!collectionNode)
      return []
    const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`))
    const items = Array.from(context.itemMap.value.values())
    const orderedItems = items.sort(
      (a, b) => orderedNodes.indexOf(a.$el) - orderedNodes.indexOf(b.$el),
    )
    return orderedItems
  }

  return { getItems }
}
