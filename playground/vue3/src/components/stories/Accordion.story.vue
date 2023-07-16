<script setup>
import AccordionDemo from "../Demo/AccordionDemo.vue";
</script>

<template>
  <Story title="Accordion" :layout="{ type: 'single', iframe: true }">
    <Variant title="default">
      <div class="h-full flex items-center justify-center">
        <AccordionDemo />
      </div>
    </Variant>
  </Story>
</template>
