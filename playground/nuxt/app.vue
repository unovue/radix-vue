<script setup lang="ts">
import Card from "./components/Card.vue";
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-6xl w-full grid grid-cols-3 gap-4 pt-40 pb-40">
      <Card>
        <DropdownMenuDemo />
      </Card>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-black text-white;
}

[data-radix-popper-content-wrapper] {
  @apply z-[1000];
}
</style>
