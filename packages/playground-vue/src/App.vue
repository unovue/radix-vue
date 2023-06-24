<script setup lang="ts">
import Card from "./components/Card.vue";
import CheckboxDemo from "./components/Demo/CheckboxDemo.vue";
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-6xl w-full grid grid-cols-3 gap-3 pt-40">
      <Card>
        <CheckboxDemo />
      </Card>
    </div>
  </div>
</template>
