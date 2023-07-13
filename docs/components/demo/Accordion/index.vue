<script setup lang="ts">
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "radix-vue";
import { Icon } from "@iconify/vue";

const rootDisabled = false;
</script>

<template>
  <AccordionRoot
    class="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
    :default-value="'item-1'"
    type="single"
    :disabled="rootDisabled"
    :collapsible="true"
  >
    <AccordionItem class="accordion-item" value="item-1">
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger group"
          ><span>Is it accessible?</span>
          <Icon
            icon="radix-icons:chevron-down"
            class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="accordion-content data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
      >
        <div class="px-5 py-4">Yes. It adheres to the WAI-ARIA design pattern.</div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="accordion-item" value="item-2">
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger group"
          ><span>Is it unstyled?</span>
          <Icon
            icon="radix-icons:chevron-down"
            class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="accordion-content data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
      >
        <div class="px-5 py-4">
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="accordion-item" value="item-3">
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger group"
          ><span>Can it be animated?</span>
          <Icon
            icon="radix-icons:chevron-down"
            class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="accordion-content data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
      >
        <div class="px-5 py-4">
          Yes! You can use the transition prop to configure the animation.
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style scoped>
.accordion-item {
  @apply focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px];
}

.accordion-trigger {
  @apply text-grass11  shadow-mauve6 hover:bg-mauve2 flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none;
}

.accordion-content {
  @apply text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px];
}
</style>
