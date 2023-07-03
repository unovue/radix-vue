<script setup lang="ts">
import { ref, computed, watch } from "vue";
const open = ref(false);

const props = defineProps({
  tabs: Array,
});

const height = computed(() => {
  return open.value ? "auto" : "150px";
});

//const tabs = ["app.vue", "tailwind.config.js"];
const currentTab = ref("app.vue");
const codeScrollWrapper = ref<HTMLElement | undefined>();

watch(open, () => {
  if (!open.value && codeScrollWrapper.value) {
    codeScrollWrapper.value.scrollTop = 0;
  }
});
</script>

<template>
  <div class="demo-preview relative rounded-lg overflow-hidden text-sm">
    <div
      class="bg-gradient-to-br from-teal-500 to-green-600 w-full relative items-center justify-center flex"
    >
      <div class="w-full max-w-[700px] flex flex-col items-center justify-center py-[100px]">
        <slot name="previewSlot" />
      </div>
    </div>
    <slot name="codeSlot"/>
  </div>
</template>

<style scoped></style>
