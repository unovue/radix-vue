<script lang="ts">
interface AspectRatioProps {
  ratio?: number;
}
</script>

<script setup lang="ts">
import { PrimitiveDiv } from "@/Primitive";
import { computed } from "vue";

const props = defineProps<AspectRatioProps>();

const aspect = computed(() => {
  return (1 / props.ratio) * 100;
});
</script>

<template>
  <div :style="`position: relative; width: 100%; padding-bottom: ${aspect}%`">
    <PrimitiveDiv style="position: absolute; inset: 0px">
      <slot />
    </PrimitiveDiv>
  </div>
</template>
