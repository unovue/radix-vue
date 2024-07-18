<script setup lang="ts">
import { onContentUpdated, useData } from 'vitepress'
import DocOutlineItem from '../components/DocOutlineItem.vue'
import { type MenuItem, getHeaders, useActiveAnchor } from '../composables/outline'
import { onMounted, ref, shallowRef } from 'vue'

defineProps<{
  collapsible?: boolean
}>()

const { frontmatter, theme } = useData()

const headers = shallowRef<MenuItem[]>([])

onMounted(() => {
  headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline)
})
onContentUpdated(() => {
  headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline)
})

const container = ref()
const marker = ref()

useActiveAnchor(container, marker)
</script>

<template>
  <nav
    ref="container"
    :class="{ 'block relative': headers.length > 0 }"
  >
    <div
      ref="marker"
      class="outline-marker absolute left-0 h-[18px] w-[2px] bg-primary transition-[top,opacity] ease-in-out duration-300 rounded-full -translate-y-1"
    />

    <div
      v-if="!collapsible"
      id="doc-outline-aria-label"
      aria-level="2"
      class="font-bold text-sm mb-2"
      role="heading"
    >
      On this page
    </div>

    <DocOutlineItem
      :headers="headers"
      :root="true"
    />
  </nav>
</template>
