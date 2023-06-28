<script lang="ts">
interface AspectRatioProps {
  asChild?: boolean;
  ratio?: number;
}
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<AspectRatioProps>(), {
  asChild: false,
  ratio: 1,
});

const aspect = computed(() => {
  return (1 / props.ratio) * 100;
});
</script>

<template>
  <div :style="`position: relative; width: 100%; padding-bottom: ${aspect}%`">
    <div style="position: absolute; inset: 0px">
      <slot />
    </div>
  </div>
</template>
