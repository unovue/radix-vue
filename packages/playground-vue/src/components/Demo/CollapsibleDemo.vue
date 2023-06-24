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
  <CollapsibleRoot
    v-model:open="rootOpen"
    :disabled="rootDisabled"
    class="w-full"
  >
    <div class="flex items-center justify-between">
      <span class="text-sm leading-6 text-white">
        @mujahidfa starred 3 repos
      </span>
      <CollapsibleTrigger
        class="inline-grid h-6 w-6 place-items-center rounded-full bg-white text-sm text-green-700 shadow-lg outline-none hover:opacity-75 focus:ring focus:ring-black data-[disabled]:cursor-not-allowed data-[disabled]:opacity-75"
      >
        <Icon
          v-if="rootOpen"
          icon="heroicons:x-mark"
          class="h-3 w-3 text-black"
        />
        <Icon
          v-else
          icon="heroicons:chevron-up-down"
          class="h-3 w-3 text-black"
        />
      </CollapsibleTrigger>
    </div>

    <div class="my-2 rounded bg-white p-3 shadow-lg">
      <span class="text-base leading-[25px] text-green-800"
        >radix-vue/radix-vue</span
      >
    </div>

    <CollapsibleContent>
      <div class="flex flex-col gap-2">
        <div class="rounded bg-white p-3 shadow-lg">
          <span class="text-base leading-[25px] text-green-800"
            >vuejs/core</span
          >
        </div>
        <div class="rounded bg-white p-3 shadow-lg">
          <span class="text-base leading-[25px] text-green-800">nuxt/nuxt</span>
        </div>
      </div>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
