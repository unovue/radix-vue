<script setup lang="ts">
import { inject } from "vue";
import MenuContentImpl, {
  type MenuRootContentTypeProps,
} from "./MenuContentImpl.vue";
import { MENU_INJECTION_KEY } from "./MenuRoot.vue";

const context = inject(MENU_INJECTION_KEY);

const props = defineProps<MenuRootContentTypeProps>();
</script>

<template>
  <MenuContentImpl
    :trap-focus="false"
    :disable-outside-pointer-events="false"
    :disable-outside-scroll="false"
    @dismiss="context?.onOpenChange(false)"
    v-bind="props"
  >
    <slot></slot>
  </MenuContentImpl>
</template>
