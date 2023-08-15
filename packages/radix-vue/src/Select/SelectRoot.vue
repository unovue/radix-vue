<script lang="ts">
import type { Ref, InjectionKey, OptionHTMLAttributes } from "vue";
import type { DataOrientation, Direction } from "../shared/types";
import { useId, useNewCollection } from "@/shared";

export interface SelectRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  defaultValue?: string;
  modelValue?: string;
  orientation?: DataOrientation;
  dir?: Direction;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

export const SELECT_INJECTION_KEY =
  Symbol() as InjectionKey<SelectProvideValue>;

export type SelectProvideValue = {
  triggerElement: Ref<HTMLElement | undefined>;
  onTriggerChange(node: HTMLElement | undefined): void;
  valueElement: Ref<HTMLElement | undefined>;
  onValueElementChange(node: HTMLElement): void;
  valueElementHasChildren: boolean;
  onValueElementHasChildrenChange(hasChildren: boolean): void;
  contentId: string;
  modelValue?: Ref<string>;
  onValueChange(value: string): void;
  open: Ref<boolean>;
  required?: Ref<boolean>;
  onOpenChange(open: boolean): void;
  dir: Ref<Direction>;
  triggerPointerDownPosRef: Ref<{ x: number; y: number } | null>;
  disabled?: Ref<boolean>;
};

export type SelectNativeOptionsContextValue = {
  onNativeOptionAdd(option: OptionHTMLAttributes): void;
  onNativeOptionRemove(option: OptionHTMLAttributes): void;
};

export const SELECT_NATIVE_OPTIONS_INJECTION_KEY =
  Symbol() as InjectionKey<SelectNativeOptionsContextValue>;
</script>

<script setup lang="ts">
import { provide, ref, toRefs } from "vue";
import { PopperRoot } from "@/Popper";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<SelectRootProps>(), {
  orientation: "vertical",
  defaultValue: "",
  modelValue: "",
  open: false,
  dir: "ltr",
});

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "update:open", value: string): void;
}>();

const { createCollection } = useNewCollection();

const modelValue = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});

const open = useVModel(props, "open", emits, {
  defaultValue: props.defaultOpen,
  passive: true,
});

const contentElement = ref<HTMLElement>();
const triggerElement = ref<HTMLElement>();
const valueElement = ref<HTMLElement>();
const triggerPointerDownPosRef = ref({
  x: 0,
  y: 0,
});

createCollection(contentElement);

const { required, disabled, dir } = toRefs(props);
provide<SelectProvideValue>(SELECT_INJECTION_KEY, {
  triggerElement,
  onTriggerChange: (node: HTMLElement | undefined) => {
    triggerElement.value = node;
  },
  valueElement,
  onValueElementChange: (node: HTMLElement | undefined) => {
    valueElement.value = node;
  },
  valueElementHasChildren: false,
  onValueElementHasChildrenChange: (hasChildren: boolean) => {},
  contentId: useId(),
  modelValue,
  onValueChange: (value: string) => {
    modelValue.value = value;
  },
  open,
  required,
  onOpenChange: (value: boolean) => {
    open.value = value;
  },
  dir,
  triggerPointerDownPosRef,
  disabled,
});

// temporary ignore native options for accessbitlity (3/3)
// provide(SELECT_NATIVE_OPTIONS_INJECTION_KEY, {
// })
</script>

<template>
  <PopperRoot v-bind="$attrs">
    <slot />

    <!-- BubbleSelect -->
  </PopperRoot>
</template>
