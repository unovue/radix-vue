<script setup>
import AlertDialogDemo from "../Demo/AlertDialogDemo.vue"
</script>

<template>
  <Story title="Alert Dialog" :layout="{ type: 'single', iframe: true }">
    <Variant title="default">
      <div class="h-full flex items-center justify-center">
        <AlertDialogDemo />
      </div>
    </Variant>
  </Story>
</template>
