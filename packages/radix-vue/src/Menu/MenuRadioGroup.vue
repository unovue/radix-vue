<script lang="ts">
interface MenuRadioGroupContextValue {
  modelValue: Ref<string>;
  onValueChange: (payload: string) => void;
}

export const MENU_RADIO_GROUP_INJECTION_KEY =
  Symbol() as InjectionKey<MenuRadioGroupContextValue>;
</script>

<script setup lang="ts">
import MenuGroup, { type MenuGroupProps } from "./MenuGroup.vue";
import { provide, type InjectionKey, type Ref } from "vue";
import { useVModel } from "@vueuse/core";

export interface MenuRadioGroupProps extends MenuGroupProps {
  modelValue?: string;
}
export interface MenuRadioGroupEmits {
  (e: "update:modelValue", payload: boolean): void;
}

const props = withDefaults(defineProps<MenuRadioGroupProps>(), {
  modelValue: "",
});
const emits = defineEmits<MenuRadioGroupEmits>();
const modelValue = useVModel(props, "modelValue", emits);

provide(MENU_RADIO_GROUP_INJECTION_KEY, {
  modelValue,
  onValueChange: (ev) => {
    modelValue.value = ev;
  },
});
</script>

<template>
  <MenuGroup v-bind="props">
    <slot></slot>
  </MenuGroup>
</template>
