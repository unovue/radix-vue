<script setup lang="ts">
const sliderValue = ref([50])
</script>

<template>
  <div class="absolute left-4 top-3 text-sm">
    <p>Value: {{ sliderValue }}</p>
  </div>
  <SliderRoot v-model="sliderValue" class="relative flex items-center select-none touch-none w-[200px] h-5" max="100" step="1">
    <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
      <SliderRange class="absolute bg-white rounded-full h-full" />
    </SliderTrack>
    <SliderThumb
      class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
      aria-label="Volume"
    />
  </SliderRoot>
</template>
