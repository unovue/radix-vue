<script lang="ts">
import type { PopperAnchorProps } from "@/Popper";

export interface PopoverAnchorProps extends PopperAnchorProps { }
</script>

<script setup lang="ts">
import { PopperAnchor } from "@/Popper";

const props = defineProps<PopoverAnchorProps>();
</script>

<template>
  <PopperAnchor v-bind="props"></PopperAnchor>
</template>
