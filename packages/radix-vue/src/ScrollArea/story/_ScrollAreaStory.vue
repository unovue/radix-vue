<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  ScrollAreaCorner,
} from "../";
import type { ScrollAreaRootProps } from "../ScrollAreaRoot.vue";

interface Props extends ScrollAreaRootProps {
  animated?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  animated: false,
  vertical: true,
  horizontal: true,
});
</script>
<template>
  <ScrollAreaRoot
    class="w-[200px] h-[200px] shadow-lg overflow-hidden rounded bg-white"
    style="--scrollbar-size: 10px"
    v-bind="props"
  >
    <ScrollAreaViewport class="w-full h-full border-[inherit]">
      <div class="p-5">
        <slot></slot>
      </div>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      class="flex select-none touch-none p-0.5 bg-black/10 transition hover:bg-black/20 data-[orientation=vertical]:w-[var(--scrollbar-size)]"
      orientation="vertical"
      v-if="vertical"
    >
      <ScrollAreaThumb
        class="flex-1 bg-gray-400 rounded-[var(--scrollbar-size)] relative ScrollAreaThumb"
      />
    </ScrollAreaScrollbar>

    <ScrollAreaScrollbar
      class="flex select-none touch-none p-0.5 bg-black/10 transition hover:bg-black/20 data-[orientation=horizontal]:h-[var(--scrollbar-size)]"
      orientation="horizontal"
      v-if="horizontal"
    >
      <ScrollAreaThumb
        class="flex-1 bg-gray-400 rounded-[var(--scrollbar-size)] relative ScrollAreaThumb"
      />
    </ScrollAreaScrollbar>

    <ScrollAreaCorner class="bg-gray-300"></ScrollAreaCorner>
  </ScrollAreaRoot>
</template>
