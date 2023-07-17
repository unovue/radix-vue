<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface ToolbarRootProps extends PrimitiveProps {
  orientation?: DataOrientation;
  dir?: Direction;
  loop?: boolean;
}

export const TOOLBAR_INJECTION_KEY =
  Symbol() as InjectionKey<ToolbarProvideValue>;

export interface ToolbarProvideValue {
  parentElement: Ref<HTMLElement | undefined>;
  activeElement: Ref<HTMLElement | undefined>;
  orientation: DataOrientation;
}
</script>

<script setup lang="ts">
import { ref, provide } from "vue";
import {
  PrimitiveDiv,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";

const props = withDefaults(defineProps<ToolbarRootProps>(), {
  orientation: "horizontal",
  dir: "ltr",
});

const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

const activeElementRef = ref<HTMLElement>();

provide<ToolbarProvideValue>(TOOLBAR_INJECTION_KEY, {
  parentElement,
  activeElement: activeElementRef,
  orientation: props.orientation,
});
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    role="toolbar"
    tabindex="0"
    style="outline: none"
    :aria-orientation="props.orientation"
    :dir="props.dir"
    :data-orientation="props.orientation"
    :as-child="props.asChild"
  >
    <slot />
  </PrimitiveDiv>
</template>
