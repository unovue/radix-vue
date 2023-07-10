import { type InjectionKey, type Ref } from "vue";

type DropdownMenuItemContextValue = {
  modelValue: Ref<boolean>;
};

export const DROPDOWN_MENU_ITEM_SYMBOL =
  Symbol() as InjectionKey<DropdownMenuItemContextValue>;
