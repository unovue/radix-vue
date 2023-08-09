<script setup lang="ts">
import { getCheckedState } from "./utils";
import MenuItem, {
  type MenuItemProps,
  type MenuItemEmits,
} from "./MenuItem.vue";
import { computed, inject, provide, toRefs } from "vue";
import { MENU_RADIO_GROUP_INJECTION_KEY } from "./MenuRadioGroup.vue";
import { MENU_ITEM_INDICATOR_INJECTION_KEY } from "./MenuItemIndicator.vue";

interface MenuRadioItemProps extends MenuItemProps {
  value: string;
}
interface MenuRadioItemEmits extends MenuItemEmits {}

const props = defineProps<MenuRadioItemProps>();
const emits = defineEmits<MenuRadioItemEmits>();

const { value } = toRefs(props);
const radioGroupContext = inject(MENU_RADIO_GROUP_INJECTION_KEY);
const checked = computed(
  () => radioGroupContext?.modelValue.value === value?.value
);

provide(MENU_ITEM_INDICATOR_INJECTION_KEY, {
  checked,
});
</script>

<template>
  <MenuItem
    role="menuitemradio"
    v-bind="props"
    :aria-checked="checked"
    :data-state="getCheckedState(checked)"
    @select="
      async (event) => {
        emits('select', event);
        radioGroupContext?.onValueChange(value);
      }
    "
  >
    <slot></slot>
  </MenuItem>
</template>
