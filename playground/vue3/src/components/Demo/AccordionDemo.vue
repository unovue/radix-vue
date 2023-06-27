<script setup lang="ts">
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  // } from "../../../../../packages/radix-vue/src";
} from "radix-vue";
import { ref } from "vue";

const tabValue = ref(["item-1"]);
const rootDisabled = false;
</script>

<template>
  <div>
    <p>Tab value: {{ tabValue }}</p>
  </div>
  <AccordionRoot
    class="w-[300px] rounded-md bg-[--line-color] shadow-lg"
    v-model:value="tabValue"
    type="single"
    :disabled="rootDisabled"
    :collapsible="true"
  >
    <AccordionItem class="accordion-item" value="item-1">
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger"
          >Is it accessible?</AccordionTrigger
        >
      </AccordionHeader>
      <AccordionContent class="accordion-content">
        <div class="px-5 py-4">
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="accordion-item" value="item-2">
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger"
          >Is it unstyled?</AccordionTrigger
        >
      </AccordionHeader>
      <AccordionContent class="accordion-content">
        <div class="px-5 py-4">
          Yes. It's unstyled by default, giving you freedom over the look and
          feel.
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="accordion-item" value="item-3">
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger"
          >Can it be animated?</AccordionTrigger
        >
      </AccordionHeader>
      <AccordionContent class="accordion-content">
        <div class="px-5 py-4">
          Yes! You can use the transition prop to configure the animation.
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style scoped>
.accordion-item {
  @apply mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b 
			focus-within:relative focus-within:z-10 focus-within:ring-2 focus-within:ring-black;
}
.accordion-trigger {
  @apply flex h-12 flex-1  cursor-pointer items-center
			justify-between bg-white px-5 text-base font-medium leading-none text-green-700 shadow-[0_1px_0]
			shadow-[--line-color] outline-none hover:bg-gray-200;
}
.accordion-content {
  @apply overflow-hidden bg-gray-100 text-sm text-gray-900;
}
</style>
