<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from '../../../../../packages/radix-vue/src'
import { ref } from 'vue'

const tabValue = ref('item-1')
const rootDisabled = false
</script>

<template>
  <div>
    <p>Tab value: {{ tabValue }}</p>
  </div>
  <AccordionRoot
    class="w-[300px] rounded-md bg-[--line-color] shadow-lg" default-value="item-2" v-model="tabValue"
    :disabled="rootDisabled" :collapsible="false" orientation="horizontal"
  >
    <AccordionItem class="accordion-item" value="item-1" disabled>
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger" as-child>
          <custombutton class="custom-trigger">
            Is it accessible?
          </custombutton>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="accordion-content data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
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
      <AccordionContent class="accordion-content data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
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
      <AccordionContent class="accordion-content data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <div>
          <div class="px-5 py-4">
            Yes! You can use the transition prop to configure the animation.
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style scoped>
.accordion-item {
  @apply mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:ring-2 focus-within:ring-black;
}

.accordion-trigger {
  @apply flex h-12 flex-1 cursor-pointer items-center justify-between bg-white px-5 text-base font-medium leading-none text-green-700 shadow-[0_1px_0] shadow-[--line-color] outline-none hover:bg-gray-200;
}

.accordion-content {
  @apply overflow-hidden bg-gray-100 text-sm text-gray-900;
}
</style>
