<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ProgressRoot, ProgressIndicator } from "radix-vue";

const progressValue = ref(50);

const incrementProgress = () => {
  progressValue.value += 0.03;
  if (progressValue.value >= 100) {
    progressValue.value = 100;
  }
    requestAnimationFrame(incrementProgress);
};

onMounted(() => {
  requestAnimationFrame(incrementProgress);
});
</script>

<template>
  <p>{{ progressValue.toFixed(2) }}</p>
  <ProgressRoot class="relative overflow-hidden bg-blackA9 rounded-full w-[300px] h-[25px]"
    style="transform: translateZ(0)" v-model="progressValue">
    <ProgressIndicator
      class="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
      :style="`transform: translateX(-${100 - progressValue}%)`" />
  </ProgressRoot>
</template>
