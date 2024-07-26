<script setup lang="ts">
// @ts-expect-error internal function
import localSearchIndex from '@localSearchIndex'
// @ts-expect-error ignoring
import Mark from 'mark.js/src/vanilla.js'
import MiniSearch, { type SearchResult } from 'minisearch'
import { useData } from 'vitepress'
import { DialogClose, ListboxContent, ListboxFilter, ListboxItem, ListboxRoot } from 'reka-ui'
import { type Ref, markRaw, nextTick, ref, shallowRef } from 'vue'
import { computedAsync, debouncedWatch } from '@vueuse/core'
import { LRUCache } from '../functions/cache'
import { Icon } from '@iconify/vue'

const emits = defineEmits<{
  close: []
}>()

const { localeIndex } = useData()

const filterText = ref('')
const enableNoResults = ref(false)
const resultsEl = shallowRef<HTMLElement>()
const searchIndexData = shallowRef(localSearchIndex)
const results: Ref<(SearchResult & Result)[]> = shallowRef([])

interface Result {
  title: string
  titles: string[]
  text?: string
}

// hmr
if (import.meta.hot) {
  import.meta.hot.accept('/@localSearchIndex', (m) => {
    if (m) {
      searchIndexData.value = m.default
    }
  })
}

const mark = computedAsync(async () => {
  if (!resultsEl.value)
    return
  return markRaw(new Mark(resultsEl.value))
}, null)

const searchIndex = computedAsync(async () =>
  markRaw(
    MiniSearch.loadJSON<Result>(
      (await searchIndexData.value[localeIndex.value]?.())?.default,
      {
        fields: ['title', 'titles', 'text'],
        storeFields: ['title', 'titles'],
        searchOptions: {
          fuzzy: 0.2,
          prefix: true,
          boost: { title: 4, text: 2, titles: 1 },
        },
      },
    ),
  ),
)

const cache = new LRUCache(16) // 16 files

debouncedWatch(
  () => [searchIndex.value, filterText.value] as const,
  async ([index, filterTextValue], old, onCleanup) => {
    if (old?.[0] !== index) {
      // in case of hmr
      cache.clear()
    }

    let canceled = false
    onCleanup(() => {
      canceled = true
    })

    if (!index)
      return

    // Search
    results.value = index
      .search(filterTextValue)
      .slice(0, 16) as (SearchResult & Result)[]

    if (canceled)
      return

    const terms = new Set<string>()

    results.value = results.value.map((r) => {
      const [id, anchor] = r.id.split('#')
      const map = cache.get(id)
      const text = map?.get(anchor) ?? ''
      for (const term in r.match) {
        terms.add(term)
      }
      return { ...r, text }
    })

    await nextTick()
    if (canceled)
      return

    await new Promise((r) => {
      mark.value?.unmark({
        done: () => {
          mark.value?.markRegExp(formMarkRegex(terms), { done: r })
        },
      })
    })

    enableNoResults.value = true
    // FIXME: without this whole page scrolls to the bottom
    resultsEl.value?.firstElementChild?.scrollIntoView({ block: 'start' })
  },
  { debounce: 200, immediate: true },
)

function formMarkRegex(terms: Set<string>) {
  return new RegExp(
    [...terms]
      .sort((a, b) => b.length - a.length)
      .map(term => `(${term.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')})`)
      .join('|'),
    'gi',
  )
}
</script>

<template>
  <ListboxRoot>
    <div class="w-full px-6 flex items-center">
      <ListboxFilter
        v-model="filterText"
        class="w-full h-14 outline-none bg-transparent placeholder:text-muted-foreground text-sm flex-1"
        placeholder="Search documentation"
        auto-focus
      />
      <DialogClose>
        <Icon icon="lucide:x" />
      </DialogClose>
    </div>

    <ListboxContent
      :ref="(node) => {
        if (node && '$el' in node) {
          resultsEl = node.$el
        }
      }"
      as="ul"
      class="max-h-[55vh] overflow-auto border-y border-muted empty:border-t-0 p-0.5"
    >
      <ListboxItem
        v-for="p in results"
        :key="p.id"
        :value="p.id"
        class="data-[highlighted]:bg-primary/10 data-[highlighted]:text-primary data-[highlighted]:font-semibold text-muted-foreground text-sm"
        as-child
        @select="emits('close')"
      >
        <a
          :href="p.id"
          class="inline-flex px-6 py-4 w-full"
        >
          <div class="flex items-center flex-wrap">
            <!-- <span>#</span> -->
            <span
              v-for="(t, index) in p.titles"
              :key="index"
              class="flex items-center"
            >
              <span
                class="text"
                v-html="t"
              />
              <Icon
                icon="lucide:chevron-right"
                inline
                class="mx-1 md:mx-2"
              />
            </span>
            <span>
              <span
                class="text"
                v-html="p.title"
              />
            </span>
          </div>
        </a>
      </ListboxItem>

      <li
        v-if="filterText && !results.length && enableNoResults"
        class="flex items-center justify-center text-foreground p-16 text-sm"
      >
        No results for "<strong>{{ filterText }}</strong>"
      </li>
    </ListboxContent>

    <div class="py-4 px-6 prose prose-stone dark:prose-invert text-sm hidden md:flex items-center gap-4">
      <span class="inline-flex items-center gap-1 leading-4">
        <kbd aria-label="Up arrow">
          <Icon icon="lucide:arrow-up" />
        </kbd>
        <kbd aria-label="Down arrow">
          <Icon icon="lucide:arrow-down" />
        </kbd>
        to navigate
      </span>
      <span class="inline-flex items-center gap-1 leading-4">
        <kbd aria-label="Enter">
          enter
        </kbd>
        to select
      </span>
      <span class="inline-flex items-center gap-1 leading-4">
        <kbd aria-label="Escape">esc</kbd>
        to close
      </span>
    </div>
  </ListboxRoot>
</template>
