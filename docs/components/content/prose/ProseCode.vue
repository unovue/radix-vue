<script lang="ts">
import { defineComponent } from "#imports";

export default defineComponent({
  props: {
    code: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    let clipboard: Clipboard;
    const icon = ref("heroicons:clipboard-document");

    onMounted(() => {
      clipboard = navigator.clipboard;
    });

    async function copy() {
      await clipboard.writeText(props.code);
      icon.value = "heroicons:clipboard-document-check";

      setTimeout(() => {
        icon.value = "heroicons:clipboard-document";
      }, 2000);
    }

    return {
      icon,
      copy,
    };
  },
});
</script>

<template>
  <div
    class="p-6 bg-neutral-900 group relative text-[13px] group font-mono overflow-auto rounded-lg"
    :class="`language-${language}`"
  >
    <button
      variant="solid"
      class="absolute w-9 h-9 text-lg border opacity-0 rounded-md bg-neutral-900 hover:bg-neutral-800 border-neutral-700/50 right-3 top-3 group-hover:opacity-100 transition z-[1]"
      size="xs"
      tabindex="-1"
      @click="copy"
    >
      <Icon :name="icon" />
    </button>
    <span
      v-if="filename"
      class="text-gray-400 dark:text-gray-500 absolute right-3 bottom-3 text-sm group-hover:opacity-0 transition-opacity"
    >
      {{ filename }}
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
