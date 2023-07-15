import { type MaybeElementRef, unrefElement } from "@vueuse/core";
import { onMounted, onUnmounted } from "vue";

export const onFocusOutside = (
  element: MaybeElementRef,
  handler: (event: FocusEvent) => void
) => {
  const handleFocusOut = (ev: FocusEvent) => {
    const el = unrefElement(element);
    const isFocusInsideElement = el?.contains(ev.relatedTarget as Node);

    if (!isFocusInsideElement) {
      handler(ev);
    }
  };

  onMounted(() => {
    const el = unrefElement(element);
    // @ts-ignore
    el?.addEventListener("focusout", handleFocusOut);
  });
  onUnmounted(() => {
    const el = unrefElement(element);
    // @ts-ignore
    el?.removeEventListener("focusout", handleFocusOut);
  });
};
