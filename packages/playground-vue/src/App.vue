<script setup lang="ts">
import { HelloButton, CheckboxRoot, CheckboxIndicator } from "radix-vue";
import Counter from "./components/Counter.vue";
import Wrapper from "./components/Wrapper.vue";
import SlotOne from "./components/SlotOne.vue";
import SlotTwo from "./components/SlotTwo.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <HelloButton />

  <label class="flex flex-row gap-3 items-center [&>.checkbox]:hover:bg-neutral-100">
    <CheckboxRoot
      class="bg-white shadow h-6 aspect-square rounded flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-[#00000066]"
    >
      <div class="bg-black h-full w-full rounded flex items-center justify-center">
        <Icon icon="lucide:check" class="h-4 w-4 text-white" />
      </div>
    </CheckboxRoot>
    <span class="select-none">Checkbox 1</span>
  </label>
  <Wrapper>
    <SlotTwo />
    <SlotOne />
  </Wrapper>
</template>
