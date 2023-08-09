<script setup lang="ts">
import { inject } from "vue";
import MenuContentImpl, {
  type MenuContentImplProps,
  type MenuContentImplEmits,
} from "./MenuContentImpl.vue";
import { MENU_INJECTION_KEY } from "./MenuRoot.vue";
import { useEmitAsProps } from "@/shared";

const context = inject(MENU_INJECTION_KEY);

interface MenuRootContentModalProps extends MenuContentImplProps {}
type MenuRootContentModalEmits = MenuContentImplEmits;

const props = defineProps<MenuRootContentModalProps>();
const emits = defineEmits<MenuRootContentModalEmits>();

// Hide everything from ARIA except the `MenuContent`
//  React.useEffect(() => {
//   const content = ref.current;
//   if (content) return hideOthers(content);
// }, []);

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuContentImpl
    v-bind="{ ...props, ...emitsAsProps }"
    :trap-focus="context?.open.value"
    :disable-outside-pointer-events="context?.open.value"
    :disable-outside-scroll="true"
    @dismiss="context?.onOpenChange(false)"
    @focus-outside.prevent="emits('focusOutside', $event)"
  >
    <slot></slot>
  </MenuContentImpl>
</template>
