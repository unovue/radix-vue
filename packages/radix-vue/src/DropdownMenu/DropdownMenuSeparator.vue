<script lang="ts">
type Orientation = "horizontal" | "vertical";

interface ToolbarSeparatorProps {
  orientation?: Orientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ToolbarSeparatorProps>(), {
  orientation: "horizontal",
  decorative: false,
});
</script>

<template>
  <div
    :data-orientation="props.orientation"
    :role="`${decorative ? 'none' : 'separator'}`"
  ></div>
</template>
