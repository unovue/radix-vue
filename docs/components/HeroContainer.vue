<script setup lang="ts">
defineProps<{
  overflow?: boolean;
}>();
</script>

<template>
  <div class="relative text-[15px] text-black">
    <div
      class="bg-gradient-to-br p-4 rounded-t-lg from-teal9 to-green9 w-full relative items-center justify-center flex"
      :class="{ 'overflow-x-auto': overflow }"
    >
      <div class="w-full max-w-[700px] flex items-center py-12 sm:py-[100px] custom-justify-center">
        <slot />
      </div>
    </div>
    <slot name="codeSlot" />
  </div>
</template>

<style scoped>
:deep(input) {
  background-color: white;
}

:deep(li) {
  margin-top: 0 !important;
}

:deep(button:focus),
:deep(button:focus-visible) {
  outline: 0;
}

:deep(h3) {
  margin: 0px !important;
  font-weight: unset !important;
}

:deep(pre) {
  z-index: 0 !important;
}
</style>
