<script setup lang="ts">
import { ref } from "vue";
import {
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent,
} from "radix-vue";
import { Icon } from "@iconify/vue";

const rootOpen = ref(false);
const rootDisabled = ref(false);
</script>

<template>
  <CollapsibleRoot class="w-[300px]" v-model:open="rootOpen"
    :disabled="rootDisabled">
      <div style="display: flex; align-items: center; justify-content: space-between">
        <span class="text-violet11 text-[15px] leading-[25px]" style="color: white">
          @mujahidfa starred 3 repos
        </span>
        <CollapsibleTrigger asChild class="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 shadow-[0_2px_10px] shadow-blackA7 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
          <button>
            <Icon
            v-if="rootOpen"
            icon="radix-icons:cross-2"
            class="h-3 w-3 text-black"
            />
            <Icon
            v-else
            icon="radix-icons:row-spacing"
            class="h-3 w-3 text-black"
            />
          </button>
        </CollapsibleTrigger>
      </div>

      <div class="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7">
        <span class="text-violet11 text-[15px] leading-[25px]">radix-vue/radix-vue</span>
      </div>

      <CollapsibleContent>
        <div class="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7">
          <span class="text-violet11 text-[15px] leading-[25px]">vuejs/core</span>
        </div>
        <div class="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7">
          <span class="text-violet11 text-[15px] leading-[25px]">nuxt/nuxt</span>
        </div>
      </CollapsibleContent>
    </CollapsibleRoot>
</template>
