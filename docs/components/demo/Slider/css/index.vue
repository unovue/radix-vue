<script setup lang="ts">
import { ref } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
import './styles.css'

const sliderValue = ref([50])
</script>

<template>
  <SliderRoot
    v-model="sliderValue"
    class="SliderRoot"
    :max="100"
    :step="1"
  >
    <SliderTrack class="SliderTrack">
      <SliderRange class="SliderRange" />
    </SliderTrack>
    <SliderThumb
      class="SliderThumb"
      aria-label="Volume"
    />
  </SliderRoot>
</template>
