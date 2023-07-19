<script lang="ts" context="module">
import { usePrimitiveElement } from "@/Primitive";
import { useArrowNavigation, useId } from "@/shared";
import type { ComputedRef, InjectionKey } from "vue";
import {
  ACCORDION_INJECTION_KEY,
  type AccordionProvideValue,
} from "./AccordionRoot.vue";

enum AccordionItemState {
  Open = "open",
  Closed = "closed",
}

export interface AccordionItemProps {
  asChild?: boolean;

  /**
   * A unique value for the item.
   */
  value: string;

  /**
   * When true, prevents the user from interacting with the item.
   *
   * @defaultValue false
   */
  disabled?: boolean;
}

export interface AccordionItemProvideValue {
  dataState: ComputedRef<AccordionItemState>;
  disabled: ComputedRef<boolean>;
  dataDisabled: ComputedRef<"" | undefined>;
  triggerId: string;
}

export const ACCORDION_ITEM_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionItemProvideValue>;
</script>

<script setup lang="ts">
import { computed, inject, provide } from "vue";
import { CollapsibleRoot } from "../Collapsible";

const props = withDefaults(defineProps<AccordionItemProps>(), {
  asChild: false,
  disabled: false,
});

const injectedRoot = inject<AccordionProvideValue>(ACCORDION_INJECTION_KEY);

const open = computed({
  get: () => {
    return injectedRoot?.isSingle.value
      ? props.value === injectedRoot.modelValue.value
      : Array.isArray(injectedRoot?.modelValue.value) &&
          injectedRoot?.modelValue.value.includes(props.value);
  },
  set: (open) => {
    injectedRoot?.handleItemState(props.value, open || false);
  },
});

const disabled = computed(
  () =>
    injectedRoot?.disabled ||
    props.disabled ||
    (!!open.value && !injectedRoot?.collapsible)
);

const dataDisabled = computed(() => (disabled.value ? "" : undefined));

const dataState = computed(() => {
  console.log("datastate", open.value);
  return open.value ? AccordionItemState.Open : AccordionItemState.Closed;
});

provide<AccordionItemProvideValue>(ACCORDION_ITEM_INJECTION_KEY, {
  dataState,
  disabled,
  dataDisabled,
  triggerId: useId(),
});

const { primitiveElement, currentElement } = usePrimitiveElement();

function handleArrowKey(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    injectedRoot?.parentElement.value!,
    {
      arrowKeyOptions: injectedRoot?.orientation,
      dir: injectedRoot?.direction,
    }
  );

  if (!newSelectedElement) return;

  const trigger =
    newSelectedElement.querySelector<HTMLButtonElement>("[aria-controls]");
  trigger?.focus();
}
</script>

<template>
  <CollapsibleRoot
    ref="primitiveElement"
    :data-orientation="injectedRoot?.orientation"
    :data-disabled="dataDisabled"
    :data-state="dataState"
    :disabled="disabled"
    v-model:open="open"
    @keydown.up.down.left.right="handleArrowKey"
    data-radix-vue-collection-item
  >
    <slot />
  </CollapsibleRoot>
</template>
