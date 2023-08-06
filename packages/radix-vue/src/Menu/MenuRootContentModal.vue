<script setup lang="ts">
import { inject } from "vue";
import MenuContentImpl, {
  type MenuRootContentTypeProps,
  type MenuContentEmits,
} from "./MenuContentImpl.vue";
import { MENU_INJECTION_KEY } from "./MenuRoot.vue";
import { usePrimitiveElement } from "@/Primitive";
import {} from "./utils";

const context = inject(MENU_INJECTION_KEY);

const props = defineProps<MenuRootContentTypeProps>();
const emits = defineEmits<MenuContentEmits>();

const { primitiveElement, currentElement } = usePrimitiveElement();

// Hide everything from ARIA except the `MenuContent`
//  React.useEffect(() => {
//   const content = ref.current;
//   if (content) return hideOthers(content);
// }, []);
</script>

<template>
  <MenuContentImpl
    ref="primitiveElement"
    :trap-focus="context?.open.value"
    :disable-outside-pointer-events="context?.open.value"
    :disable-outside-scroll="true"
    @dismiss="context?.onOpenChange(false)"
    @focus-outside.prevent="emits('focusOutside', $event)"
    v-bind="props"
  >
    <slot></slot>
  </MenuContentImpl>
</template>
