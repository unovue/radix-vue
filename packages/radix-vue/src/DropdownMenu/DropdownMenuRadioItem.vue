<script lang="ts">
import type { Ref } from "vue";

export type DropdownMenuCheckboxProvideValue = Readonly<Ref<boolean>>;
</script>
<script setup lang="ts">
import { inject, computed, provide, toRef } from "vue";
import BaseMenuItem from "../shared/component/BaseMenuItem.vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./DropdownMenuRadioGroup.vue";

interface RadioGroupItemProps {
  asChild?: boolean;
  value?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onSelect?: void;
  textValue?: string;
}

const rootInjectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);
const radioInjectedValue = inject<RadioGroupProvideValue>(
  RADIO_GROUP_INJECTION_KEY
);

const props = defineProps<RadioGroupItemProps>();

const radioDataState = computed(() => {
  return radioInjectedValue?.modelValue?.value === props.value ? "on" : "off";
});

function handleClick() {
  if (rootInjectedValue?.selectedElement.value) {
    return radioInjectedValue?.changeModelValue(props.value);
  }
}

provide<DropdownMenuCheckboxProvideValue>(
  "modelValue",
  toRef(() => radioInjectedValue?.modelValue?.value === props.value)
);
</script>

<template>
  <BaseMenuItem
    :disabled="props.disabled"
    :rootProvider="rootInjectedValue"
    :orientation="rootInjectedValue?.orientation"
    :data-radix-vue-radio-value="props.value"
    @handle-click="handleClick"
    role="menuitemradio"
    :data-state="radioDataState"
  >
    <slot />
  </BaseMenuItem>
</template>
