<script setup lang="ts">
import { ref } from "vue";
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from "./";

const sliderValue = ref([50]);
const controlledLtr = ref([44]);
const controlledLtrMulti = ref([10, 30]);
const controlledRtl = ref([44]);
const controlledRtlMulti = ref([10, 30]);
const directionRtl = ref([44]);
const directionRtlMulti = ref([10, 30]);

</script>

<template>
  <Story title="Slider" :layout="{ type: 'single', iframe: true }">
    <Variant title="chromatic">
      <div class="flex flex-col items-left dark:text-white">
        <h1 class="font-bold text-xl dark:text-white">Uncontrolled</h1>
        <span class="">LTR</span>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :default-value="[20]"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :default-value="[10, 30]"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <span class="">RTL</span>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :default-value="[20]"
          dir="rtl"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :default-value="[10, 30]"
          dir="rtl"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h1 class="font-bold text-xl dark:text-white">Controlled</h1>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :default-value="[10, 15, 20, 80]"
          dir="rtl"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h1 class="font-bold text-xl dark:text-white">Controlled</h1>
        <span class="">LTR</span>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          v-model="controlledLtr"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          v-model="controlledLtrMulti"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <span class="">RTL</span>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          v-model="controlledRtl"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          v-model="controlledRtlMulti"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h1 class="font-bold text-xl dark:text-white">Direction</h1>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          dir="rtl"
          v-model="directionRtl"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          dir="rtl"
          v-model="directionRtlMulti"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h1 class="font-bold text-xl dark:text-white">Scenarios</h1>
        <h2>Extremes</h2>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :default-value="[0, 100]"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>
        <span class="">0 Case</span>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :min="-100"
          :max="100"
          :default-value="[0]"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>
        <span class="">Multiple ranges</span>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :default-value="[10, 15, 20, 80]"
        >
          <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
            <SliderRange class="absolute bg-white rounded-full h-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h2>Vertical</h2>
        <SliderRoot
          class="relative flex justify-center items-center select-none touch-none w-5 h-[100px]"
          orientation="vertical"
        >
          <SliderTrack class="bg-blackA10 relative rounded-full w-[3px] h-full">
            <SliderRange class="absolute bg-white rounded-full w-full" />
          </SliderTrack>
          <SliderThumb
            class="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          />
        </SliderRoot>

        <h2>Out of bound value (negative)</h2>
        <SliderRoot
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :min="0"
          :max="100"
          :default-value="[-9000]"
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
          class="relative flex items-center select-none touch-none w-[200px] h-5"
          :min="0"
          :max="100"
          :default-value="[9000]"
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
