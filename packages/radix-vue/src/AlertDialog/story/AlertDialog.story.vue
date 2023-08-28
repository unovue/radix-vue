<script setup lang="ts">
import AlertDialog from './_AlertDialog.vue'
</script>

<template>
  <Story title="Alert Dialog" :layout="{ type: 'single', iframe: true }">
    <Variant title="default">
      <AlertDialog />
    </Variant>
  </Story>
</template>
