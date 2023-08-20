<script setup lang="ts">
import { ref } from "vue";
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from "./";

const sliderValue = ref(50);
const sliderValueLtr = ref(44);
const sliderValueRtl = ref(44);
</script>

<template>
  <Story title="Slider" :layout="{ type: 'single', iframe: true }">
    <Variant title="chromatic">
      <div class="flex flex-col items-left dark:text-white">
        <h1 class="font-bold text-xl dark:text-white">Uncontrolled</h1>
        <span class="">LTR</span>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :default-value="75"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>
        <span class="">RTL</span>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :default-value="75"
          dir="rtl"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h1 class="font-bold text-xl dark:text-white">Controlled</h1>
        <span class="">LTR</span>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          v-model="sliderValueLtr"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <span class="">RTL</span>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          v-model="sliderValueRtl"
          dir="rtl"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h1 class="font-bold text-xl dark:text-white">Direction</h1>
        <h2>Prop</h2>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          dir="rtl"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h1 class="font-bold text-xl dark:text-white">Scenarios</h1>
        <h2>Extremes</h2>
        <span class="">0 Case</span>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :min="-100"
          :max="100"
          :default-value="0"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h2>Vertical</h2>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          orientation="vertical"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h2>Out of bound value (negative)</h2>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :min="0"
          :max="100"
          :default-value="-9000"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h2>Out of bound value (positive)</h2>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :min="0"
          :max="100"
          :default-value="9000"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h1 class="font-bold text-xl dark:text-white">Disabled</h1>
        <SliderRoot
          name="slider"
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :disabled="true"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>
      </div>
    </Variant>

    <Variant title="default">
      <SliderRoot
        name="slider"
        v-model="sliderValue"
        class="relative flex items-center select-none touch-none w-[200px] h-5"
        :max="100"
        :step="1"
        :extra-step="0"
      >
        <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
          <SliderRange class="absolute bg-white rounded-full h-full" />
        </SliderTrack>
        <SliderThumb
          class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
        />
      </SliderRoot>
    </Variant>
  </Story>
</template>
