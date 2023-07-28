<script lang="ts">
import type { PopperArrowProps } from "@/Popper/PopperArrow.vue";

export interface PopoverArrowProps extends PopperArrowProps {}
</script>

<script setup lang="ts">
import { PopperArrow } from "@/Popper";

const props = defineProps<PopoverArrowProps>();
</script>

<template>
  <PopperArrow v-bind="props"></PopperArrow>
</template>
