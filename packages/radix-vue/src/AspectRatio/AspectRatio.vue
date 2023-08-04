<script lang="ts">
interface AspectRatioProps extends PrimitiveProps {
  ratio?: number;
}
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { computed } from "vue";

const props = withDefaults(defineProps<AspectRatioProps>(), {
  ratio: 1,
});

const aspect = computed(() => {
  return (1 / props.ratio) * 100;
});
</script>

<template>
  <div :style="`position: relative; width: 100%; padding-bottom: ${aspect}%`">
    <Primitive
      :as-child="asChild"
      :as="as"
      style="position: absolute; inset: 0px"
    >
      <slot />
    </Primitive>
  </div>
</template>
