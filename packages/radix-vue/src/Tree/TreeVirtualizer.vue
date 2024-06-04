<script lang="ts">
export interface TreeVirtualizerProps {
  /** Estimated size (in px) of each item */
  estimateSize?: number
  /** text content for each item to achieve type-ahead feature */
  textContent?: (item: any) => string
}
</script>

<script setup lang="ts">
import { useVirtualizer } from '@tanstack/vue-virtual'
import { type Ref, cloneVNode, computed, useSlots } from 'vue'
import { type FlattenedItem, injectTreeRootContext } from './TreeRoot.vue'
import { refAutoReset, useParentElement } from '@vueuse/core'
import { getNextMatch } from '@/shared/useTypeahead'
import { MAP_KEY_TO_FOCUS_INTENT } from '@/RovingFocus/utils'
import { useCollection } from '@/Collection'

const props = defineProps<TreeVirtualizerProps>()

defineSlots<{
  default: (props: {
    item: FlattenedItem<any>
  }) => any
}>()

const slots = useSlots()
const rootContext = injectTreeRootContext()
const parentEl = useParentElement() as Ref<HTMLElement>
const { getItems } = useCollection()

// Reset `search` 1 second after it was last updated
const search = refAutoReset('', 1000)
const optionsWithMetadata = computed(() => {
  const parseTextContent = (option: any) => {
    if (props.textContent)
      return props.textContent(option)
    else
      return option.toString().toLowerCase()
  }

  return rootContext.items.value.map((option, index) => ({
    index,
    textContent: parseTextContent(option.value),
  }))
})

// set virtual true when this component mounted
rootContext.isVirtual.value = true

const padding = computed(() => {
  const el = parentEl.value
  if (!el) {
    return { start: 0, end: 0 }
  }
  else {
    const styles = window.getComputedStyle(el)
    return {
      start: Number.parseFloat(styles.paddingBlockStart || styles.paddingTop),
      end: Number.parseFloat(styles.paddingBlockEnd || styles.paddingBottom),
    }
  }
})

const virtualizer = useVirtualizer(
  {
    get scrollPaddingStart() { return padding.value.start },
    get scrollPaddingEnd() { return padding.value.end },
    get count() { return rootContext.items.value.length ?? 0 },
    get horizontal() { return false },
    estimateSize() {
      return props.estimateSize ?? 28
    },
    getScrollElement() { return parentEl.value },
    overscan: 12,
  },
)

const virtualizedItems = computed(() => virtualizer.value.getVirtualItems().map((item) => {
  return {
    item,
    is: cloneVNode(slots.default!({
      item: rootContext.items.value[item.index],
    })![0], {
      'key': `${item.index}`,
      'data-index': item.index,
      'aria-setsize': rootContext.items.value.length,
      'aria-posinset': item.index + 1,
      'style': {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: `translateY(${item.start}px)`,
        overflowAnchor: 'none',
      },
    }),
  }
}))

function scrollToIndexAndFocus(index: number) {
  virtualizer.value.scrollToIndex(index, { align: 'start' })
  requestAnimationFrame(() => {
    const item = parentEl.value.querySelector(`[data-index="${index}"]`) as HTMLElement
    if (item instanceof HTMLElement)
      item.focus()
  })
}

rootContext.virtualKeydownHook.on((event) => {
  const isMetaKey = event.altKey || event.ctrlKey || event.metaKey
  const isTabKey = event.key === 'Tab' && !isMetaKey
  if (isTabKey)
    return

  const intent = MAP_KEY_TO_FOCUS_INTENT[event.key]

  if (['first', 'last'].includes(intent)) {
    event.preventDefault()

    const index = intent === 'first' ? 0 : rootContext.items.value.length - 1
    virtualizer.value.scrollToIndex(index)
    requestAnimationFrame(() => {
      const items = getItems()
      const item = intent === 'first' ? items[0] : items[items.length - 1]
      item.ref.focus()
    })
  }
  else if (intent === 'prev' && event.key !== 'ArrowUp') {
    const currentElement = document.activeElement as HTMLElement
    const currentIndex = Number(currentElement.getAttribute('data-index'))
    const currentLevel = Number(currentElement.getAttribute('data-indent'))
    const list = rootContext.items.value.slice(0, currentIndex).map((item, index) => ({ ...item, index })).reverse()

    const parentItem = list.find(item => item.level === (currentLevel - 1))
    if (parentItem)
      scrollToIndexAndFocus(parentItem.index)
  }
  else if (!intent && !isMetaKey) {
    search.value += event.key
    const currentIndex = Number(document.activeElement?.getAttribute('data-index'))
    const currentMatch = optionsWithMetadata.value[currentIndex].textContent
    const filteredOptions = optionsWithMetadata.value.map(i => i.textContent)
    const next = getNextMatch(filteredOptions, search.value, currentMatch)

    const nextMatch = optionsWithMetadata.value.find(option => option.textContent === next)
    if (nextMatch)
      scrollToIndexAndFocus(nextMatch.index)
  }
})
</script>

<template>
  <div
    data-radix-vue-virtualizer
    :style="{
      position: 'relative',
      width: '100%',
      height: `${virtualizer.getTotalSize()}px`,
    }"
  >
    <component
      :is="is"
      v-for="{ is, item } in virtualizedItems"
      :key="item.index"
    />
  </div>
</template>
