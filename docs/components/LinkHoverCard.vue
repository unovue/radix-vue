<script setup lang="ts">
import { computedAsync, hyphenate } from '@vueuse/core'
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'
import { computed, h } from 'vue'
// @ts-expect-error we should use alias but I don't want to export all
import { compile } from 'vue/dist/vue.esm-bundler.js'

const props = defineProps<{
  name: string
}>()

const href = computed(() => {
  const [last, ...parts] = hyphenate(props.name).split('-').reverse()
  return `/components/${parts.join('-')}.html#${last}`
})

// Better to have this cache
const Content = computedAsync(async () => {
  const raw = await import(`../content/meta/${props.name}.md?raw`)
  const componentString = raw.default.replace(/<!--[\s\S]*?-->\n?/, '')
  return h(compile(componentString))
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
        class="w-[500px] h-56 rounded-2xl border border-muted-foreground/30 bg-card px-2 shadow-xl overflow-x-hidden prose dark:prose-invert [&>div]:my-2"
        side="top"
        align="start"
        :align-offset="-20"
      >
        <slot name="content">
          <Suspense>
            <Content />
          </Suspense>
        </slot>

        <HoverCardArrow
          class="fill-card stroke-muted-foreground/30 -translate-y-[1px]"
          :width="16"
          :height="8"
        />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
