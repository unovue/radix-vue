<script lang="ts">
import type { InjectionKey, Ref } from "vue";
export type Direction = "ltr" | "rtl";

export interface AccordionImplProps {
  /**
   * Whether or not an accordion is disabled from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * The layout in which the Accordion operates.
   * @default vertical
   */
  orientation?: "horizontal" | "vertical";
  /**
   * The language read direction.
   */
  dir?: Direction;
}

export interface AccordionValueProvideValue {
  value: Ref<string[]>;
  onItemOpen(value: string): void;
  onItemClose(value: string): void;
}

export const ACCORDION_VALUE_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionValueProvideValue>;

export interface AccordionCollapsibleProvideValue {
  collapsible: boolean;
}

export const ACCORDION_COLLAPSIBLE_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionCollapsibleProvideValue>;

export interface AccordionImplProvideValue {
  disabled?: boolean;
  direction: AccordionImplProps["dir"];
  orientation: AccordionImplProps["orientation"];
  parentElement: Ref<HTMLDivElement | undefined>;
}

export const ACCORDION_IMPL_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionImplProvideValue>;
</script>

<script setup lang="ts">
import { provide, ref } from "vue";

const props = withDefaults(defineProps<AccordionImplProps>(), {
  orientation: "vertical",
});

const parentElementRef = ref<HTMLDivElement>();

provide<AccordionImplProvideValue>(ACCORDION_IMPL_INJECTION_KEY, {
  disabled: props.disabled,
  direction: props.dir,
  orientation: props.orientation,
  parentElement: parentElementRef,
});
</script>

<template>
  <div ref="parentElementRef">
    <slot />
  </div>
</template>
