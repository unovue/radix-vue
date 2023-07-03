<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb } from "radix-vue";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
</script>

<template>
  <ScrollAreaRoot class="w-[200px] h-[200px] shadow-lg overflow-hidden rounded bg-white" style="--scrollbar-size: 10px">
    <ScrollAreaViewport class="w-full h-full border-[inherit]">
      <div class="p-5">
        <div class="text-base text-blue-500 font-semibold">Tags</div>
        <div v-for="tag in tags" :key="tag" class="text-blue-800 text-sm mt-3 border-t border-t-blue-400 pt-3">
          {{ tag }}
        </div>
      </div>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      class="flex select-none touch-none p-0.5 bg-black/10 transition hover:bg-black/20 data-[orientation=vertical]:w-[var(--scrollbar-size)]"
      orientation="vertical"
    >
      <ScrollAreaThumb class="flex-1 bg-gray-400 rounded-[var(--scrollbar-size)] relative ScrollAreaThumb" />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar
      class="flex select-none touch-none p-0.5 bg-black/10 transition hover:bg-black/20 data-[orientation=horizontal]:h-[var(--scrollbar-size)]"
      orientation="horizontal"
    >
      <ScrollAreaThumb class="flex-1 bg-gray-400 rounded-[var(--scrollbar-size)] relative ScrollAreaThumb" />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</template>

<style>
/* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
.ScrollAreaThumb::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  min-width: 44px;
  min-height: 44px;
}
</style>
