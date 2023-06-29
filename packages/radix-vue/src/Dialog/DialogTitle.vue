<script lang="ts">
export interface DialogTitleProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveH2 } from "../Primitive";

const props = withDefaults(defineProps<DialogTitleProps>(), {
  asChild: false,
});
</script>

<template>
  <PrimitiveH2 :asChild="props.asChild"><slot /></PrimitiveH2>
</template>
