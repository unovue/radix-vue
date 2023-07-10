import { type InjectionKey, type Ref } from "vue";

type MenubarItemContextValue = {
  modelValue: Ref<boolean>;
};

export const MENUBAR_ITEM_SYMBOL =
  Symbol() as InjectionKey<MenubarItemContextValue>;
