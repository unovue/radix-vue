<script lang="ts" context="module">
import type { ComputedRef, InjectionKey, Ref } from "vue";
import type { CollapsibleRootProps } from "../Collapsible";
import { ACCORDION_INJECTION_KEY } from "./AccordionRoot.vue";

enum AccordionItemState {
  Open = "open",
  Closed = "closed",
}

export interface AccordionItemProps
  extends Omit<CollapsibleRootProps, "open" | "defaultOpen" | "onOpenChange"> {
  /**
   * Whether or not an accordion item is disabled from user interaction.
   * When true, prevents the user from interacting with the item.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A string value for the accordion item. All items within an accordion should use a unique value.
   */
  value: string;
}

export interface AccordionItemProvideValue {
  open: ComputedRef<boolean>;
  dataState: ComputedRef<AccordionItemState>;
  disabled: ComputedRef<boolean>;
  dataDisabled: ComputedRef<"" | undefined>;
  triggerId: string;
  primitiveElement: Ref<HTMLElement | undefined>;
  currentElement: ComputedRef<HTMLElement | undefined>;
  value: ComputedRef<string>;
}

export const ACCORDION_ITEM_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionItemProvideValue>;
</script>

<script setup lang="ts">
import { CollapsibleRoot } from "@/Collapsible";
import { usePrimitiveElement } from "@/Primitive";
import { useArrowNavigation, useId } from "@/shared";
import { computed, inject, provide } from "vue";

const props = defineProps<AccordionItemProps>();

const injectedRoot = inject(ACCORDION_INJECTION_KEY);

const open = computed(() =>
  injectedRoot?.isSingle.value
    ? props.value === injectedRoot.modelValue.value
    : Array.isArray(injectedRoot?.modelValue.value) &&
      !!injectedRoot?.modelValue.value.includes(props.value)
);

const disabled = computed(() => {
  return (
    injectedRoot?.disabled ||
    props.disabled ||
    (!!injectedRoot?.isSingle.value && open.value && !injectedRoot?.collapsible)
  );
});

const dataDisabled = computed(() => (disabled.value ? "" : undefined));

const dataState = computed(() =>
  open.value ? AccordionItemState.Open : AccordionItemState.Closed
);

const { primitiveElement, currentElement } = usePrimitiveElement();

provide<AccordionItemProvideValue>(ACCORDION_ITEM_INJECTION_KEY, {
  open,
  dataState,
  disabled,
  dataDisabled,
  triggerId: useId(),
  primitiveElement,
  currentElement,
  value: computed(() => props.value),
});

function handleArrowKey(e: KeyboardEvent) {
  useArrowNavigation(
    e,
    currentElement.value!,
    injectedRoot?.parentElement.value!,
    {
      arrowKeyOptions: injectedRoot?.orientation,
      dir: injectedRoot?.direction,
      focus: true,
    }
  );
}
</script>

<template>
  <CollapsibleRoot
    :data-orientation="injectedRoot?.orientation"
    :data-disabled="dataDisabled"
    :data-state="dataState"
    :disabled="disabled"
    v-model:open="open"
    @keydown.up.down.left.right.home.end="handleArrowKey"
    :as-child="props.asChild"
  >
    <slot :open="open" />
  </CollapsibleRoot>
</template>
