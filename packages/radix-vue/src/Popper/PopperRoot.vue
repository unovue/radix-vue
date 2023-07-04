<script lang="ts">
import type { Ref, InjectionKey } from "vue";
export type Measurable = { getBoundingClientRect(): DOMRect };

type PopperContextValue = {
  anchor: Ref<HTMLElement | undefined>;
  onAnchorChange(element: HTMLElement | undefined): void;
};

export const POPPER_ROOT_KEY = Symbol() as InjectionKey<PopperContextValue>;
</script>

<script setup lang="ts">
import { provide, ref } from "vue";

const anchor = ref<HTMLElement>();

provide(POPPER_ROOT_KEY, {
  anchor,
  onAnchorChange: (element: HTMLElement | undefined) => {
    anchor.value = element;
  },
});
</script>

<template>
  <slot></slot>
</template>
