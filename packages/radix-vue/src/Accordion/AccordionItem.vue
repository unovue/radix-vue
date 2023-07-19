<script lang="ts" context="module">
import { usePrimitiveElement, type PrimitiveProps } from "@/Primitive";
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

export interface AccordionItemProps extends PrimitiveProps {
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
  open: ComputedRef<boolean>;
  dataState: ComputedRef<AccordionItemState>;
  disabled: ComputedRef<boolean>;
  dataDisabled: ComputedRef<"" | undefined>;
  triggerId: string;
  setTriggerElement: (element: HTMLElement) => void;
  value: ComputedRef<string>;
}

export const ACCORDION_ITEM_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionItemProvideValue>;
</script>

<script setup lang="ts">
import { computed, inject, provide, ref } from "vue";

const props = defineProps<AccordionItemProps>();

const injectedRoot = inject<AccordionProvideValue>(ACCORDION_INJECTION_KEY);

const open = computed(() =>
  injectedRoot?.isSingle.value
    ? props.value === injectedRoot.modelValue.value
    : Array.isArray(injectedRoot?.modelValue.value) &&
      !!injectedRoot?.modelValue.value.includes(props.value)
);

const disabled = computed(
  () =>
    injectedRoot?.disabled ||
    props.disabled ||
    (!!open.value && !injectedRoot?.collapsible)
);

const dataDisabled = computed(() => (disabled.value ? "" : undefined));

const dataState = computed(() =>
  open.value ? AccordionItemState.Open : AccordionItemState.Closed
);

const triggerElement = ref<HTMLElement>();
provide<AccordionItemProvideValue>(ACCORDION_ITEM_INJECTION_KEY, {
  open,
  dataState,
  disabled,
  dataDisabled,
  triggerId: useId(),
  setTriggerElement: (element) => (triggerElement.value = element),
  value: computed(() => props.value),
});

const { primitiveElement, currentElement } = usePrimitiveElement();

function handleArrowKey(e: KeyboardEvent) {
  if (!triggerElement.value) return;

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

  triggerElement.value.focus();
}
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    :data-orientation="injectedRoot?.orientation"
    :data-disabled="dataDisabled"
    :data-state="dataState"
    :disabled="disabled"
    v-model:open="open"
    @keydown.up.down.left.right="handleArrowKey"
    data-radix-vue-collection-item
    :as-child="props.asChild"
  >
    <slot :open="open" />
  </PrimitiveDiv>
</template>
