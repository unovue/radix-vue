<script lang="ts">
export interface TreeVirtualizerProps {
  /** Estimated size (in px) of each item */
  estimateSize?: number
}
</script>

<script setup lang="ts">
import { useVirtualizer } from '@tanstack/vue-virtual'
import { type Ref, cloneVNode, computed, useSlots } from 'vue'
import { type FlattenedItem, injectTreeRootContext } from './TreeRoot.vue'
import { useParentElement } from '@vueuse/core'
import type { AcceptableValue } from '@/shared/types'

const props = defineProps<TreeVirtualizerProps>()

defineSlots<{
  default: (props: {
    item: FlattenedItem<any>
  }) => any
}>()

const slots = useSlots()
const rootContext = injectTreeRootContext()
const parentEl = useParentElement() as Ref<HTMLElement>

// set virtual true when this component mounted
// rootContext.isVirtual.value = true

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
    get count() { return rootContext.items?.value.length ?? 0 },
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
      item: rootContext.items?.value[item.index],
    })![0], {
      'key': `${item.index}`,
      'data-index': item.index,
      'aria-setsize': rootContext.items?.value.length,
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
