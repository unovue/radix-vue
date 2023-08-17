<script setup lang="ts">
import { inject } from "vue";
import MenuContentImpl, {
  type MenuContentImplEmits,
  type MenuRootContentProps,
} from "./MenuContentImpl.vue";
import { MENU_INJECTION_KEY } from "./MenuRoot.vue";
import { useEmitAsProps } from "@/shared";

const context = inject(MENU_INJECTION_KEY);

interface MenuRootContentNonModalProps extends MenuRootContentProps {}
type MenuRootContentModalEmits = MenuContentImplEmits;

const props = defineProps<MenuRootContentNonModalProps>();
const emits = defineEmits<MenuRootContentModalEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuContentImpl
    v-bind="{ ...props, ...emitsAsProps }"
    :trap-focus="false"
    :disable-outside-pointer-events="false"
    :disable-outside-scroll="false"
    @dismiss="context?.onOpenChange(false)"
  >
    <slot></slot>
  </MenuContentImpl>
</template>
