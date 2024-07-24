<script setup lang="ts">
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'

const props = defineProps<{
  href: string
}>()
</script>

<template>
  <HoverCardRoot :open-delay="300">
    <HoverCardTrigger
      as="a"
      :href="href"
    >
      <slot />
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent
        class="data-[side=top]:animate-slideDownAndFade w-[300px] rounded-xl border border-muted bg-background p-4 data-[state=open]:transition-all"
        :side-offset="5"
        side="top"
        align="start"
        :align-offset="10"
      >
        <slot name="content" />

        <HoverCardArrow
          class="fill-background stroke-muted -translate-y-[1px]"
          as-child
          :width="30"
          :height="30"
        >
          <svg
            display="block"
            viewBox="0 0 30 30"
          ><g transform="rotate(180 15 15)"><path
            fill="none"
            d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"
          /><path
            stroke="none"
            d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"
          /></g></svg>
        </HoverCardArrow>
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
