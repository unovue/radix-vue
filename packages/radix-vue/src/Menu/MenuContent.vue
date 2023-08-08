<script setup lang="ts">
import { inject } from "vue";
import { Presence } from "@/Presence";
import MenuRootContentModal from "./MenuRootContentModal.vue";
import MenuRootContentNonModal from "./MenuRootContentNonModal.vue";
import { MENU_INJECTION_KEY, MENU_ROOT_INJECTION_KEY } from "./MenuRoot.vue";
import {
  type MenuContentImplProps,
  type MenuContentImplEmits,
} from "./MenuContentImpl.vue";

export interface MenuContentProps extends MenuContentImplProps {}
export interface MenuContentEmits extends MenuContentImplEmits {}

const props = defineProps<MenuContentProps>();
const emits = defineEmits<MenuContentEmits>();

const context = inject(MENU_INJECTION_KEY);
const rootContext = inject(MENU_ROOT_INJECTION_KEY);
</script>

<template>
  <Presence :present="context!.open.value">
    <MenuRootContentModal
      v-bind="{ ...$attrs, ...props }"
      v-if="rootContext?.modal.value"
    >
      <slot></slot>
    </MenuRootContentModal>
    <MenuRootContentNonModal v-bind="{ ...$attrs, ...props }" v-else>
      <slot></slot>
    </MenuRootContentNonModal>
  </Presence>
</template>
