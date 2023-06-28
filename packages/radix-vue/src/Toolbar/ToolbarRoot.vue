<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface ToolbarRootProps {
  asChild?: boolean;
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

const props = withDefaults(defineProps<ToolbarRootProps>(), {
  asChild: false,
  orientation: "horizontal",
  dir: "ltr",
});

const parentElementRef = ref<HTMLElement>();
const activeElementRef = ref<HTMLElement>();

provide<ToolbarProvideValue>(TOOLBAR_INJECTION_KEY, {
  parentElement: parentElementRef,
  activeElement: activeElementRef,
  orientation: props.orientation,
});
</script>

<template>
  <div
    ref="parentElementRef"
    role="toolbar"
    tabindex="0"
    style="outline: none"
    :aria-orientation="props.orientation"
    :dir="props.dir"
    :data-orientation="props.orientation"
  >
    <slot />
  </div>
</template>
