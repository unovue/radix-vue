<script setup lang="ts">
import { PopperAnchor, type PopperAnchorProps } from "@/Popper";
import { inject, onBeforeMount, onUnmounted } from "vue";
import { POPOVER_INJECTION_KEY } from "./PopoverRoot.vue";

export interface PopoverAnchorProps extends PopperAnchorProps {}
const props = defineProps<PopoverAnchorProps>();

const context = inject(POPOVER_INJECTION_KEY);

onBeforeMount(() => {
  context!.hasCustomAnchor.value = true;
});
onUnmounted(() => {
  context!.hasCustomAnchor.value = false;
});
</script>

<template>
  <PopperAnchor v-bind="props">
    <slot></slot>
  </PopperAnchor>
</template>
