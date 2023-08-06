<script setup lang="ts">
import { Presence } from "@/Presence";
import { MENU_INJECTION_KEY } from "./MenuRoot.vue";
import { inject, type TeleportProps } from "vue";

interface MenuPortalProps extends TeleportProps {}
const props = defineProps<MenuPortalProps>();

const context = inject(MENU_INJECTION_KEY);
</script>

<template>
  <Presence :present="context!.open.value">
    <Teleport v-bind="props">
      <slot></slot>
    </Teleport>
  </Presence>
</template>
