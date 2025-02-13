<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'ufo'
import { type SidebarItem, useSidebarControl } from '../composables/sidebar'

const props = defineProps<{
  base?: string
  item: SidebarItem
}>()
const { isActiveLink } = useSidebarControl(computed(() => props.item))
</script>

<template>
  <li
    class="flex items-center text-sm text-muted-foreground hover:bg-card hover:text-foreground rounded-lg"
    :class="{ 'is-active !bg-primary/10 !text-primary font-semibold': isActiveLink }"
  >
    <a
      :href="base && item.link ? withBase(item.link, base) : item.link"
      class="h-[2.25rem] px-4 inline-flex items-center w-full"
      v-html="item.text"
    />
  </li>
</template>
