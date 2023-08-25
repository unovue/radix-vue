<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'

const rootDisabled = false
</script>

<template>
  <AccordionRoot
    class="w-[200px] rounded-md bg-[--line-color] shadow-lg text-xs"
    default-value="item-2"
    type="single"
    :disabled="rootDisabled"
    :collapsible="true"
  >
    <AccordionItem class="accordion-item" value="item-1">
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger">
          Is it accessible?
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="accordion-content data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
      >
        <div class="px-5 py-4">
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem class="accordion-item" value="item-2">
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger">
          Is it unstyled?
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
        <AccordionTrigger class="accordion-trigger">
          Can it be animated?
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
  @apply mt-px overflow-hidden first:mt-0 first:rounded-t-lg last:rounded-b-lg
    focus-within:relative focus-within:z-10 focus-within:ring-2 focus-within:ring-black;
}
.accordion-trigger {
  @apply flex h-12 flex-1  cursor-pointer items-center text-xs
    justify-between bg-black px-5 font-medium leading-none text-green-700 shadow-[0_1px_0]
    shadow-[--line-color] outline-none hover:bg-black;
}
.accordion-content {
  @apply overflow-hidden bg-neutral-900 text-[10px] text-white;
}
</style>
