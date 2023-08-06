<script setup lang="ts">
import { inject } from "vue";
import MenuRootContentModal from "./MenuRootContentModal.vue";
import MenuRootContentNonModal from "./MenuRootContentNonModal.vue";
import { MENU_INJECTION_KEY, MENU_ROOT_INJECTION_KEY } from "./MenuRoot.vue";

const context = inject(MENU_INJECTION_KEY);
const rootContext = inject(MENU_ROOT_INJECTION_KEY);
</script>

<template>
  <Presence :present="context!.open.value">
    <MenuRootContentModal v-if="rootContext?.modal">
      <slot></slot>
    </MenuRootContentModal>
    <MenuRootContentNonModal v-else>
      <slot></slot>
    </MenuRootContentNonModal>
  </Presence>
</template>
