<script setup lang="ts">
import { ref } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'

const sliderValue = ref([50])
</script>

<template>
  <SliderRoot
    v-model="sliderValue"
    class="relative flex items-center select-none touch-none w-[200px] h-5"
    :max="100"
    :step="1"
  >
    <SliderTrack class="bg-white border dark:border-stone-700 relative grow rounded-full h-2.5">
      <SliderRange class="absolute bg-stone-700 rounded-full h-full" />
    </SliderTrack>
    <SliderThumb
      class="block w-5 h-5 bg-white rounded-full  hover:bg-stone-50 border-2 border-stone-700 shadow-sm focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-stone-700"
      aria-label="Volume"
    />
  </SliderRoot>
</template>
