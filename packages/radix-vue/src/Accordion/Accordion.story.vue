<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "./";
</script>

<template>
  <Story title="Accordion">
    <Variant title="default">
      <AccordionRoot
        class="w-[300px] rounded-md bg-[--line-color] shadow-lg"
        default-value="item-2"
        type="single"
        :collapsible="true"
      >
        <AccordionItem class="accordion-item" value="item-1">
          <AccordionHeader class="flex">
            <AccordionTrigger class="accordion-trigger" as-child>
              <button class="custom-trigger">Is it accessible?</button>
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
              Yes. It's unstyled by default, giving you freedom over the look
              and feel.
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
            <div>
              <div class="px-5 py-4">
                Yes! You can use the transition prop to configure the animation.
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </Variant>
  </Story>
</template>
