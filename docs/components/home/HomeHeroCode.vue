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
  <button
    class="p-[1px] bg-gradient-to-r from-green-600 to-teal-500 relative text-md font-medium group font-mono overflow-auto rounded-2xl my-5"
    :class="`language-${props.language}`"
    @click="copy"
  >
  <div class="pl-[23px] h-[60px] bg-[#082120] rounded-[15px] flex items-center gap-2 pr-4">
    <span
      v-if="props.filename"
      class="text-gray-400 dark:text-gray-500 absolute right-3 bottom-3 text-sm group-hover:opacity-0 transition-opacity"
    >
      {{ props.filename }}
    </span>

    <slot />
    <div
      class="w-8 h-8 flex items-center justify-center text-lg rounded-md transition z-[1]"
    >
      <Icon :name="icon" />
    </div>
  </div>
  </button>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
