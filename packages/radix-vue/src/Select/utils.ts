import { type InjectionKey, type Ref } from "vue";

type SelectItemContextValue = {
  modelValue: Ref<boolean>;
};

export const SELECT_ITEM_SYMBOL =
  Symbol() as InjectionKey<SelectItemContextValue>;

export const OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
export const SELECTION_KEYS = [" ", "Enter"];
export const CONTENT_MARGIN = 10;

export function shouldShowPlaceholder(value?: string) {
  return value === "" || value === undefined;
}
