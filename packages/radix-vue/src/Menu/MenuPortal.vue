<script setup lang="ts">
import { Presence } from "@/Presence";
import { MENU_INJECTION_KEY } from "./MenuRoot.vue";
import { inject, type RendererElement } from "vue";

export interface MenuPortalProps {
  to?: string | RendererElement | null | undefined;
  disabled?: boolean;
}
const props = withDefaults(defineProps<MenuPortalProps>(), {
  to: "body",
});

const context = inject(MENU_INJECTION_KEY);
</script>

<template>
  <Presence :present="context!.open.value">
    <Teleport v-bind="props">
      <slot></slot>
    </Teleport>
  </Presence>
</template>
