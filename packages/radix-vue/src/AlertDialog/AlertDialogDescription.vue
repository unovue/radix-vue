<script lang="ts">
import { type PrimitiveProps } from "@/Primitive";

export interface AlertDialogDescriptionProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { PrimitiveP } from "@/Primitive";

const props = defineProps<AlertDialogDescriptionProps>();
</script>

<template>
  <PrimitiveP :as-child="props.asChild">
    <slot />
  </PrimitiveP>
</template>
