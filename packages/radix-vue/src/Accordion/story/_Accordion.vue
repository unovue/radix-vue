<script setup lang="ts">
import { ref } from 'vue'
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from '../'

const values = ['One', 'Two', 'Three', 'Four']
const count = ref(1)
</script>

<template>
  <AccordionRoot
    class="w-[300px] rounded-md bg-[--line-color] shadow-lg"
    type="single"
  >
    <AccordionItem
      v-for="value in values"
      :key="value"
      class="accordion-item"
      :value="value"
    >
      <AccordionHeader class="flex">
        <AccordionTrigger class="accordion-trigger">
          {{ value }}
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        v-for="i in count"
        :key="i"
        class="accordion-animated-content data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
      >
        <div class="px-5 py-4">
          Per erat orci nostra luctus sociosqu mus risus penatibus, duis
          elit vulputate viverra integer ullamcorper congue curabitur
          sociis, nisi malesuada scelerisque quam suscipit habitant sed.
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
