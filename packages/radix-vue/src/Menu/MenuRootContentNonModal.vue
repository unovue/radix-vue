<script setup lang="ts">
import { inject } from "vue";
import MenuContentImpl, {
  type MenuContentImplProps,
} from "./MenuContentImpl.vue";
import { MENU_INJECTION_KEY } from "./MenuRoot.vue";

const context = inject(MENU_INJECTION_KEY);

interface MenuRootContentNonModalProps extends MenuContentImplProps {}
const props = defineProps<MenuRootContentNonModalProps>();
</script>

<template>
  <MenuContentImpl
    v-bind="props"
    :trap-focus="false"
    :disable-outside-pointer-events="false"
    :disable-outside-scroll="false"
    @dismiss="context?.onOpenChange(false)"
  >
    <slot></slot>
  </MenuContentImpl>
</template>
