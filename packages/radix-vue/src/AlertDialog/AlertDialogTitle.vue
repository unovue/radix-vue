<script lang="ts">
export interface AlertDialogTitleProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveH2 } from "../Primitive";

const props = withDefaults(defineProps<AlertDialogTitleProps>(), {
  asChild: false,
});
</script>

<template>
  <PrimitiveH2 :asChild="props.asChild">
    <slot />
  </PrimitiveH2>
</template>
