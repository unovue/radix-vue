<script setup>
const tabs = ref(["app.vue", "tailwind.config.js"]);

const open = ref(false);

const height = computed(() => {
  return open.value ? "auto" : "150px";
});

const currentTab = ref("app.vue");
</script>

<template>
  <div class="demo-preview relative rounded-lg overflow-hidden text-sm">
    <div
      class="bg-gradient-to-br from-teal-500 to-green-600 w-full relative items-center justify-center flex min-h-[300px]"
    >
      <div class="w-full max-w-[700px] flex flex-col items-center justify-center">
        <slot name="previewSlot" />
      </div>
    </div>
    <div class="rounded-b-lg relative" style="border: 1px solid var(--elements-border-secondary-static)">
      <div class="bg-neutral-900 border-b border-neutral-800 flex pr-2">
        <div class="flex justify-between items-center w-full">
          <div class="flex">
            <button
              v-for="tab in tabs"
              :key="tab"
              :class="`${tab === currentTab ? 'shadow-[0_1px_0_#FFF] font-medium' : 'opacity-60'}`"
              class="py-2.5 px-4 border-box"
              @click="currentTab = tab"
            >
              {{ tab }}
            </button>
          </div>
          <div>
            <select value="TailwindCSS" class="bg-transparent">
              <option value="TailwindCSS">Tailwind CSS</option>
            </select>
          </div>
        </div>
      </div>
      <div class="bg-neutral-900 pb-10 block max-h-[80vh]" :class="`${open? 'overflow-scroll': 'overflow-hidden'}`" :style="{ height: height }">
      <div class="block start-0 relative top-0">
        <slot name="codeSlot" />
      </div>
        <div
          class="h-20 left-0 w-full flex items-center justify-center bottom-0 absolute rounded-b-lg"
          :class="!open ? 'bg-gradient-to-t from-[var(--color-black)] to-black/0' : ''"
        >
          <button
            class="mt-4 bg-neutral-900 hover:bg-neutral-800 px-3 py-1 rounded border-neutral-700/50 border"
            @click="open = !open"
          >
            {{open? 'Collapse code' : 'Expand code'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
