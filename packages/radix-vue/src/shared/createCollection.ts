import { unrefElement } from '@vueuse/core'
import {
  type Ref,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
  watch,
} from 'vue'
import { createContext } from '@/shared'

const ITEM_DATA_ATTR = 'data-radix-vue-collection-item'

type CollectionContextValue = Ref<HTMLElement[]>

/**
 * Composables for provide/inject collections
 */
export function createCollection(
  providerComponentName: string | string[],
  collectionName?: string,
) {
  const contextName
    = typeof providerComponentName === 'string' && !collectionName
      ? `${providerComponentName}Collection`
      : collectionName

  const [injectCollectionContext, provideCollectionContext]
    = createContext<CollectionContextValue>(
      providerComponentName,
      contextName,
    )

  const provideCollection = (sourceRef?: Ref<HTMLElement | undefined>) => {
    const items = ref<HTMLElement[]>([])

    provideCollectionContext(items)

    const setCollection = () => {
      const sourceEl = unrefElement(sourceRef)
      if (!sourceEl)
        return (items.value = [])

      return (items.value = Array.from(
        sourceEl.querySelectorAll(
          `[${ITEM_DATA_ATTR}]:not([data-disabled=true])`,
        ),
      ) as HTMLElement[])
    }

    onBeforeUpdate(() => {
      items.value = []
    })

    onMounted(setCollection)
    onUpdated(setCollection)

    watch(() => sourceRef?.value, setCollection, { immediate: true })

    return items
  }

  const injectCollection = () => injectCollectionContext(ref([]))

  return [injectCollection, provideCollection] as const
}
