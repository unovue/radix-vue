<script lang="ts">
export interface AlertDialogTitleProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { PrimitiveH2, type PrimitiveProps } from "../Primitive";

const props = defineProps<AlertDialogTitleProps>();
</script>

<template>
  <PrimitiveH2 :as-child="props.asChild">
    <slot />
  </PrimitiveH2>
</template>
