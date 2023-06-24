<script setup lang="ts">
type Orientation = "horizontal" | "vertical";

defineProps<{
  orientation: Orientation;
}>();
</script>

<template>
  <div :data-orientation="props.orientation" role="separator"></div>
</template>
