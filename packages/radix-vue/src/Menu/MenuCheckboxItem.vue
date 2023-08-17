<script setup lang="ts">
import { type CheckedState, getCheckedState, isIndeterminate } from "./utils";
import MenuItem, {
  type MenuItemProps,
  type MenuItemEmits,
} from "./MenuItem.vue";
import { MENU_ITEM_INDICATOR_INJECTION_KEY } from "./MenuItemIndicator.vue";
import { provide } from "vue";
import { useVModel } from "@vueuse/core";

export interface MenuCheckboxItemProps extends MenuItemProps {
  checked?: CheckedState;
}
export type MenuCheckboxItemEmits = MenuItemEmits & {
  (e: "update:checked", payload: boolean): void;
};

const props = withDefaults(defineProps<MenuCheckboxItemProps>(), {
  checked: false,
});
const emits = defineEmits<MenuCheckboxItemEmits>();
const checked = useVModel(props, "checked", emits);

provide(MENU_ITEM_INDICATOR_INJECTION_KEY, {
  checked,
});
</script>

<template>
  <MenuItem
    role="menuitemcheckbox"
    v-bind="props"
    :aria-checked="isIndeterminate(checked) ? 'mixed' : checked"
    :data-state="getCheckedState(checked)"
    @select="
      async (event) => {
        emits('select', event);
        if (isIndeterminate(checked)) {
          checked = true;
        } else {
          checked = !checked;
        }
      }
    "
  >
    <slot></slot>
  </MenuItem>
</template>
