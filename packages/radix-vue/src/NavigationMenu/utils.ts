import { type InjectionKey, type Ref } from "vue";

type NavigationMenuItemContextValue = {
  modelValue: Ref<boolean>;
};

export const NAVIGATION_MENU_ITEM_SYMBOL =
  Symbol() as InjectionKey<NavigationMenuItemContextValue>;
