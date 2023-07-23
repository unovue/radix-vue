<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ProgressRoot, ProgressIndicator } from "radix-vue";

const progressValue = ref(10);

onMounted(() => {
  const timer = setTimeout(() => (progressValue.value = 66), 500);
  return () => clearTimeout(timer);
});
</script>

<template>
  <ProgressRoot
    class="relative overflow-hidden bg-blackA9 rounded-full w-[300px] h-4 sm:h-5"
    style="transform: translateZ(0)"
    v-model="progressValue"
  >
    <ProgressIndicator
      class="bg-white rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
      :style="`transform: translateX(-${100 - progressValue}%)`"
    />
  </ProgressRoot>
</template>
