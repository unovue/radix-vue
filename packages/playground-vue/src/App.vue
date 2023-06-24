<script setup lang="ts">
import Card from "./components/Card.vue";
import CheckboxDemo from "./components/Demo/CheckboxDemo.vue";
import CollapsibleDemo from "./components/Demo/CollapsibleDemo.vue";
import LabelDemo from "./components/Demo/LabelDemo.vue";
import SeparatorDemo from "./components/Demo/SeparatorDemo.vue";
import SwitchDemo from "./components/Demo/SwitchDemo.vue";
import ToggleDemo from "./components/Demo/ToggleDemo.vue";
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-6xl w-full grid grid-cols-3 gap-4 pt-40">
      <Card>
        <CheckboxDemo />
      </Card>
      <Card>
        <CollapsibleDemo />
      </Card>
      <Card>
        <LabelDemo />
      </Card>
      <Card>
        <SeparatorDemo />
      </Card>
      <Card>
        <SwitchDemo />
      </Card>
      <Card>
        <ToggleDemo />
      </Card>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-black text-white;
}
</style>
