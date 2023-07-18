<script setup lang="ts">
import { inject, onMounted } from "vue";
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import {
  PrimitiveDiv,
  PrimitiveUl,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { useCollection } from "@/shared";

interface NavigationMenuListProps extends PrimitiveProps {}
const props = defineProps<NavigationMenuListProps>();

const context = inject(NAVIGATION_MENU_INJECTION_KEY);
const { primitiveElement, currentElement } = usePrimitiveElement();
const { setCollection } = useCollection();
setCollection(currentElement);

onMounted(() => {
  context?.onIndicatorTrackChange(currentElement.value);
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <PrimitiveDiv ref="primitiveElement" style="position: relative">
    <PrimitiveUl
      v-bind="$attrs"
      :as-child="props.asChild"
      :data-orientation="context?.orientation"
    >
      <slot></slot>
    </PrimitiveUl>
  </PrimitiveDiv>
</template>
