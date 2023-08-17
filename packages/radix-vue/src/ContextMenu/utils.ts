import { type InjectionKey, type Ref } from "vue";

type ContextMenuItemContextValue = {
  modelValue: Ref<boolean>;
};

export const CONTEXT_MENU_ITEM_SYMBOL =
  Symbol() as InjectionKey<ContextMenuItemContextValue>;

export function isTouchOrPen(event: PointerEvent) {
  return event.pointerType !== "mouse";
}
