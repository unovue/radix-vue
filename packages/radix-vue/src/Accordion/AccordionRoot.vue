<script lang="ts">
import type { DataOrientation, Direction } from "@/shared/types";
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
   * Must be used in conjunction with onValueChange.
   */
  modelValue?: string | string[];

  /**
   * Event handler called when the expanded state of an item changes.
   */
  onValueChange?(value: string | undefined | string[]): void;

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
  handleItemState(value: string, open: boolean): void;
  isSingle: ComputedRef<boolean>;
  modelValue: Ref<string | undefined | string[]>;
  collapsible: boolean;
};

function validateModelValue({ type, modelValue }: AccordionRootProps) {
  if (type === AccordionType.Single) {
    if (Array.isArray(modelValue)) {
      console.error(`Invalid prop \`value\` of value \`${modelValue}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`value\` prop must be:
  - a string
  - \`undefined\`

If you want to use multiple values, use the \`AccordionRoot\` with type \`multiple\`.

Defaulting to \`undefined\`.`);
      return undefined;
    }
  } else if (type === AccordionType.Multiple) {
    if (typeof modelValue === "string" || typeof modelValue === "undefined") {
      console.error(`Invalid prop \`value\` of value \`${modelValue}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`value\` prop must be:
- an array of strings
- empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`);
      return [];
    }
  }
  console.log({ modelValue });
  return modelValue;
}

function validateDefaultValue(props: AccordionRootProps) {
  if (props.type === AccordionType.Multiple) {
    if (Array.isArray(props.defaultValue)) {
      console.log("array", props.defaultValue);
      return props.defaultValue;
    } else if (props.defaultValue === undefined) {
      return [];
    } else {
      console.error(
        `Invalid prop \`defaultValue\` of value \`${props.defaultValue}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`defaultValue\` prop must be:
  - an array of strings
  - empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`
      );
      return [];
    }
  } else if (props.type === AccordionType.Single) {
    if (typeof props.defaultValue === "string") {
      return props.defaultValue;
    } else if (props.defaultValue === undefined) {
      return undefined;
    } else {
      console.error(
        `Invalid prop \`defaultValue\` of value \`${props.defaultValue}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`defaultValue\` prop must be:
  - a string
  - \`undefined\`

Defaulting to \`undefined\`.`
      );
      return undefined;
    }
  }
}
</script>

<script setup lang="ts">
import { usePrimitiveElement } from "@/Primitive";
import { useVModel } from "@vueuse/core";
import { computed, provide, watch } from "vue";

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

const modelValue = useVModel(props, "modelValue", emits, {
  defaultValue: validateDefaultValue(props),
  passive: true,
});

watch(
  [props.type, props.modelValue],
  () => {
    const validatedValue = validateModelValue({
      modelValue: modelValue.value,
      type: props.type,
    });
    if (modelValue.value !== validatedValue) {
      modelValue.value = validatedValue;
    }
  },
  { immediate: true }
);

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
  handleItemState(item, open) {
    if (isSingle.value) {
      modelValue.value = open ? item : undefined;
    } else {
      if (open) {
        (modelValue.value as string[]).push(item);
      } else {
        const index = (modelValue.value as string[]).indexOf(item);
        (modelValue.value as string[]).splice(index, 1);
      }
    }
    props.onValueChange?.(modelValue.value);
  },
});
</script>

<template>
  <PrimitiveDiv ref="primitiveElement" :as-child="props.asChild">
    <slot />
  </PrimitiveDiv>
</template>
