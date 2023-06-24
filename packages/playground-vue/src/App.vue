<script setup lang="ts">
import Card from "./components/Card.vue";
import CheckboxDemo from "./components/Demo/CheckboxDemo.vue";
import SwitchDemo from "./components/Demo/SwitchDemo.vue";
import SeparatorDemo from "./components/Demo/SeparatorDemo.vue";
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-6xl w-full grid grid-cols-3 gap-4 pt-40">
      <Card>
        <CheckboxDemo />
      </Card>
      <Card>
        <SwitchDemo />
      </Card>
      <Card>
        <SeparatorDemo />
      </Card>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-black text-white
}
</style>
