<script setup lang="ts">
import { inject } from "vue";
import { DIALOG_INJECTION_KEY } from "./DialogRoot.vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { Presence } from "@/Presence";
import { useBodyScrollLock } from "@/shared";

export interface DialogOverlayProps extends PrimitiveProps {}
const props = defineProps<DialogOverlayProps>();

const context = inject(DIALOG_INJECTION_KEY);

useBodyScrollLock(true);
</script>

<template>
  <Presence :present="context!.open.value">
    <Primitive
      v-bind="{ ...props, ...$attrs }"
      :data-state="context?.open.value ? 'open' : 'closed'"
      style="pointer-events: auto"
      data-aria-hidden="true"
      aria-hidden="true"
    >
      <slot />
    </Primitive>
  </Presence>
</template>
