<script lang="ts">
export interface AlertDialogDescriptionProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { PrimitiveP, type PrimitiveProps } from "@/Primitive";

const props = defineProps<AlertDialogDescriptionProps>();
</script>

<template>
  <PrimitiveP :as-child="props.asChild">
    <slot />
  </PrimitiveP>
</template>
