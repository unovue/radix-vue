<script lang="ts">
export interface DialogDescriptionProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveP } from "@/Primitive";

withDefaults(defineProps<DialogDescriptionProps>(), {
  asChild: false,
});
</script>

<template>
  <PrimitiveP :asChild="asChild"><slot /></PrimitiveP>
</template>
