<script setup lang="ts">
import { ref } from 'vue'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from '../'

const rootOpen = ref(false)
const rootDisabled = ref(false)
</script>

<template>
  <CollapsibleRoot
    v-model:open="rootOpen"
    class="w-[300px]"
    :disabled="rootDisabled"
  >
    <div
      style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
    >
      <span class="text-white text-[15px] leading-[25px]">
        @peduarte starred 3 repos
      </span>
      <CollapsibleTrigger
        class="cursor-default rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 shadow-[0_2px_10px] shadow-blackA7 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
      >
        Toggle
      </CollapsibleTrigger>
    </div>

    <div
      class="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7"
    >
      <span class="text-violet11 text-[15px] leading-[25px]">radix-vue/radix-vue</span>
    </div>

    <CollapsibleContent>
      <div
        class="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7"
      >
        <span class="text-violet11 text-[15px] leading-[25px]">vuejs/core</span>
      </div>
      <div
        class="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7"
      >
        <span class="text-violet11 text-[15px] leading-[25px]">@radix-ui/primitives</span>
      </div>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
