<script setup lang="ts">
import { inject } from "vue";
import { Presence } from "@/Presence";
import { DIALOG_INJECTION_KEY } from "./DialogRoot.vue";

export interface DialogPortalProps {
  to?: string | HTMLElement;
  disabled?: boolean;
}
const props = withDefaults(defineProps<DialogPortalProps>(), {
  to: "body",
});

const context = inject(DIALOG_INJECTION_KEY);
</script>

<template>
  <Presence :present="context!.open.value">
    <Teleport v-bind="props">
      <slot></slot>
    </Teleport>
  </Presence>
</template>
