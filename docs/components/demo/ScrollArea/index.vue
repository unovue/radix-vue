<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from 'radix-vue'

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
</script>

<template>
  <ScrollAreaRoot
    class="w-[200px] h-[225px] rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA7 bg-white"
    style="--scrollbar-size: 10px"
  >
    <ScrollAreaViewport class="w-full h-full rounded">
      <div class="py-[15px] px-5">
        <div class="text-grass11 text-[15px] leading-[18px] font-semibold">
          Tags
        </div>
        <div
          v-for="tag in tags"
          :key="tag"
          class="text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
        >
          {{ tag }}
        </div>
      </div>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      class="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      orientation="vertical"
    >
      <ScrollAreaThumb
        class="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"
      />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar
      class="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      orientation="horizontal"
    >
      <ScrollAreaThumb
        class="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"
      />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</template>
