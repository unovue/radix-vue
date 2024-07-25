<script setup lang="ts">
import { hyphenate } from '@vueuse/core'
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const href = computed(() => {
  const [last, ...parts] = hyphenate(props.name).split('-').reverse()
  return `/components/${parts.join('-')}.html#${last}`
})
</script>

<template>
  <HoverCardRoot :open-delay="300">
    <HoverCardTrigger
      as="a"
      :href="href"
      class="not-prose !text-inherit underline-offset-[3px] decoration-1 underline decoration-dotted"
    >
      <slot />
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent
        class="w-[500px] h-64 rounded-2xl border border-muted-foreground/30 bg-card px-2 shadow-xl overflow-x-hidden prose dark:prose-invert [&>div]:my-2"
        side="top"
        align="start"
        :align-offset="-20"
      >
        <slot name="content" />

        <HoverCardArrow
          class="fill-card stroke-muted-foreground/30 -translate-y-[1px]"
          :width="16"
          :height="8"
        />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
