<script lang="ts">
type SelectItemContextValue = {
  value: string;
  textId: string;
  disabled: Ref<boolean>;
  isSelected: Ref<boolean>;
  onItemTextChange(node: HTMLElement | undefined): void;
};

export const SELECT_ITEM_INJECTION_KEY =
  Symbol() as InjectionKey<SelectItemContextValue>;

export interface SelectItemProps extends PrimitiveProps {
  value: string;
  disabled?: boolean;
  textValue?: string;
}
</script>

<script setup lang="ts">
import {
  inject,
  provide,
  type InjectionKey,
  computed,
  toRefs,
  ref,
  type Ref,
  nextTick,
  onMounted,
} from "vue";
import { SELECT_INJECTION_KEY } from "./SelectRoot.vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { useId } from "@/shared";
import { SELECT_CONTENT_INJECTION_KEY } from "./SelectContentImpl.vue";
import { SELECTION_KEYS } from "./utils";

const props = defineProps<SelectItemProps>();
const { disabled } = toRefs(props);

const context = inject(SELECT_INJECTION_KEY);
const contentContext = inject(SELECT_CONTENT_INJECTION_KEY);
const { primitiveElement, currentElement } = usePrimitiveElement();

const isSelected = computed(() => context?.modelValue?.value === props.value);
const isFocused = ref(false);
const textValue = ref(props.textValue ?? "");
const textId = useId();

const handleSelect = () => {
  if (!disabled.value) {
    context!.onValueChange(props.value);
    context!.onOpenChange(false);
  }
};

const handlePointerMove = async (event: PointerEvent) => {
  await nextTick();
  if (event.defaultPrevented) return;
  if (disabled.value) {
    contentContext!.onItemLeave?.();
  } else {
    // even though safari doesn't support this option, it's acceptable
    // as it only means it might scroll a few pixels when using the pointer.
    (event.currentTarget as HTMLElement).focus({ preventScroll: true });
  }
};

const handlePointerLeave = async (event: PointerEvent) => {
  await nextTick();
  if (event.defaultPrevented) return;
  if (event.currentTarget === document.activeElement) {
    contentContext!.onItemLeave?.();
  }
};

const handleKeyDown = async (event: KeyboardEvent) => {
  await nextTick();
  if (event.defaultPrevented) return;
  const isTypingAhead = contentContext!.searchRef?.value !== "";
  if (isTypingAhead && event.key === " ") return;
  if (SELECTION_KEYS.includes(event.key)) handleSelect();
  // prevent page scroll if using the space key to select an item
  if (event.key === " ") event.preventDefault();
};

if (props.value === "") {
  throw new Error(
    "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
  );
}

onMounted(() => {
  if (!currentElement.value) return;
  contentContext!.itemRefCallback(
    currentElement.value,
    props.value,
    props.disabled
  );
});

provide(SELECT_ITEM_INJECTION_KEY, {
  value: props.value,
  disabled,
  textId,
  isSelected,
  onItemTextChange: (node) => {
    textValue.value = ((textValue.value || node?.textContent) ?? "").trim();
  },
});
</script>

<template>
  <Primitive
    ref="primitiveElement"
    data-radix-vue-collection-item
    :aria-labelledby="textId"
    :data-highlighted="isFocused ? '' : undefined"
    :aria-selected="isSelected && isFocused"
    :data-state="isSelected ? 'checked' : 'unchecked'"
    :aria-disabled="disabled || undefined"
    :data-disabled="disabled ? '' : undefined"
    :tabIndex="disabled ? undefined : -1"
    @focus="isFocused = true"
    @blur="isFocused = false"
    @pointerup="handleSelect"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
    @keydown="handleKeyDown"
  >
    <slot></slot>
  </Primitive>
</template>
