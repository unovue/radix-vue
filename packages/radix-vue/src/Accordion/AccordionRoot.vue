<script lang="ts">
import type { DataOrientation, Direction } from "@/shared/types";
import { useSingleOrMultipleValue } from "@/shared/useSingleOrMultipleValue";
import type { ComputedRef, InjectionKey, Ref } from "vue";

export enum AccordionType {
  Single = "single",
  Multiple = "multiple",
}

export type AccordionRootProps = {
  asChild?: boolean;

  /**
   * Determines whether one or multiple items can be opened at the same time.
   */
  type: AccordionType.Single | AccordionType.Multiple;

  /**
   * The controlled value of the item to expand when type is "single" or the controlled values of the items to expand when type is "multiple".
   */
  modelValue?: string | string[];

  /**
   * The default value of the item to expand when type is "single" or the default values of the items to expand when type is "multiple".
   * Use when you do not need to control the state of the item(s).
   */
  defaultValue?: string | string[];

  /**
   * When type is "single", allows closing content when clicking trigger for an open item.
   * When type is "multiple", this prop has no effect.
   *
   * @default false
   */
  collapsible?: boolean;

  /**
   * When true, prevents the user from interacting with the accordion and all its items
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.
   *
   * @default "ltr"
   */
  dir?: Direction;

  /**
   * The orientation of the accordion.
   *
   * @default "vertical"
   */
  orientation?: DataOrientation;
};

export const ACCORDION_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionProvideValue>;

export type AccordionProvideValue = {
  disabled?: AccordionRootProps["disabled"];
  direction: AccordionRootProps["dir"];
  orientation: AccordionRootProps["orientation"];
  parentElement: Ref<HTMLElement | undefined>;
  changeModelValue(value: string): void;
  isSingle: ComputedRef<boolean>;
  modelValue: Ref<string | undefined | string[]>;
  collapsible: boolean;
};
</script>

<script setup lang="ts">
import { usePrimitiveElement } from "@/Primitive";
import { computed, provide } from "vue";

const props = withDefaults(defineProps<AccordionRootProps>(), {
  asChild: false,
  dir: "ltr",
  disabled: false,
  orientation: "vertical",
  collapsible: false,
});

const emits = defineEmits<{
  (e: "update:modelValue", value: string | string[] | undefined): void;
}>();

const { modelValue, changeModelValue } = useSingleOrMultipleValue(props, emits);

const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

const isSingle = computed(() => props.type === AccordionType.Single);

provide<AccordionProvideValue>(ACCORDION_INJECTION_KEY, {
  disabled: props.disabled,
  direction: props.dir,
  orientation: props.orientation,
  parentElement,
  isSingle,
  collapsible: props.collapsible,
  modelValue,
  changeModelValue,
});
</script>

<template>
  <PrimitiveDiv ref="primitiveElement" :as-child="props.asChild">
    <slot />
  </PrimitiveDiv>
</template>
