<script setup lang="ts">
type Orientation = "horizontal" | "vertical";

const props = defineProps({
  orientation: {
    type: String as Orientation,
    required: false,
    default: "horizontal",
  },
  decorative: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <div
    :data-orientation="props.orientation"
    :role="`${decorative ? 'none' : 'separator'}`"
  ></div>
</template>
