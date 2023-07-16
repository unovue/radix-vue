<script lang="ts">
import type { SVGAttributes } from "vue";

export interface ArrowProps extends SVGAttributes {
  width?: number;
  height?: number;
}
</script>
<script setup lang="ts">
import { PrimitiveSvg, usePrimitiveElement } from "@/Primitive";

const props = withDefaults(defineProps<ArrowProps>(), {
  width: 10,
  height: 5,
});

const { primitiveElement } = usePrimitiveElement();
</script>

<template>
  <PrimitiveSvg
    ref="primitiveElement"
    v-bind="props"
    :width="width"
    :height="height"
    viewBox="0 0 30 10"
    preserveAspectRatio="none"
  >
    <slot><polygon points="0,0 30,0 15,10" /></slot>
  </PrimitiveSvg>
</template>
