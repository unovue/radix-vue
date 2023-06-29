<script lang="ts">
export interface AlertDialogDescriptionProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveP } from "../Primitive";

const props = withDefaults(defineProps<AlertDialogDescriptionProps>(), {
  asChild: false,
});
</script>

<template>
  <PrimitiveP :asChild="props.asChild">
    <slot />
  </PrimitiveP>
</template>
