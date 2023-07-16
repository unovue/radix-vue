<script lang="ts">
import type { InjectionKey, Ref } from "vue";
export type Direction = "ltr" | "rtl";
import { type PrimitiveProps } from "@/Primitive";

export interface AccordionImplProps extends PrimitiveProps {
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
  modelValue: Ref<string | string[]>;
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
  parentElement: Ref<HTMLElement | undefined>;
}

export const ACCORDION_IMPL_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionImplProvideValue>;
</script>

<script setup lang="ts">
import { provide } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

const props = withDefaults(defineProps<AccordionImplProps>(), {
  orientation: "vertical",
});

const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

provide<AccordionImplProvideValue>(ACCORDION_IMPL_INJECTION_KEY, {
  disabled: props.disabled,
  direction: props.dir,
  orientation: props.orientation,
  parentElement,
});
</script>

<template>
  <PrimitiveDiv ref="primitiveElement">
    <slot />
  </PrimitiveDiv>
</template>
