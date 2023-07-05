<script lang="ts">
interface ProseCodeProps {
  code?: string;
  language?: string | null;
  filename?: string | null;
  highlights?: () => number[];
  meta?: string | null;
}
</script>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = withDefaults(defineProps<ProseCodeProps>(), {
  code: "",
  language: null,
  filename: null,
  highlights: () => [],
  meta: null,
});

let clipboard: Clipboard;
const icon = ref("radix-icons:clipboard");

onMounted(() => {
  clipboard = navigator.clipboard;
});

async function copy() {
  await clipboard.writeText(props.code);
  icon.value = "radix-icons:check";

  setTimeout(() => {
    icon.value = "radix-icons:clipboard";
  }, 2000);
}
</script>

<template>
  <div
    class="p-6 bg-[#1a1a1a] border border-[#272727] relative text-[13px] group font-mono overflow-auto rounded-lg my-5"
    :class="`language-${props.language}`"
  >
    <button
      variant="solid"
      class="absolute w-8 h-8 text-lg border opacity-0 rounded-md bg-neutral-900 hover:bg-neutral-800 border-neutral-700/50 right-3 top-3 group-hover:opacity-100 transition z-[1]"
      size="xs"
      tabindex="-1"
      @click="copy"
    >
      <Icon :name="icon" />
    </button>
    <span
      v-if="props.filename"
      class="text-gray-400 dark:text-gray-500 absolute right-3 bottom-3 text-sm group-hover:opacity-0 transition-opacity"
    >
      {{ props.filename }}
    </span>

    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
