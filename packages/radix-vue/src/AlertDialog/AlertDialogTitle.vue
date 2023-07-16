<script lang="ts">
import { type PrimitiveProps } from "@/Primitive";

export interface AlertDialogTitleProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { PrimitiveH2 } from "../Primitive";

const props = defineProps<AlertDialogTitleProps>();
</script>

<template>
  <PrimitiveH2 :as-child="props.asChild">
    <slot />
  </PrimitiveH2>
</template>
