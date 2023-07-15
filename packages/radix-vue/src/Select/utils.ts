import { type InjectionKey, type Ref } from "vue";

type SelectItemContextValue = {
  modelValue: Ref<boolean>;
};

export const SELECT_ITEM_SYMBOL =
  Symbol() as InjectionKey<SelectItemContextValue>;
