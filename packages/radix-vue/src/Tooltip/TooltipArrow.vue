<script lang="ts">
import type { PopperArrowProps } from "@/Popper/PopperArrow.vue";

export interface TooltipArrowProps extends PopperArrowProps { }
</script>

<script setup lang="ts">
import { PopperArrow } from "@/Popper";

const props = defineProps<TooltipArrowProps>();
</script>

<template>
  <PopperArrow :as-child="props.asChild" :as="props.as" :height="props.height" :width="props.width"></PopperArrow>
</template>
