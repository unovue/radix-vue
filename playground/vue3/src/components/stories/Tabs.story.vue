<script setup>
import TabsDemo from "../Demo/TabsDemo.vue"
</script>

<template>
  <Story title="Cars" :layout="{ type: 'single', iframe: true }">
    <Variant title="default">
      <TabsDemo />
    </Variant>
  </Story>
</template>
