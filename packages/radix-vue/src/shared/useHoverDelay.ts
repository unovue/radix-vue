import { useEventListener, type Fn } from "@vueuse/core";
import { watch, type ComputedRef, type Ref, ref, unref } from "vue";

type UseHoverDelayHandler = {
  /**
   * A callback that is called when the hover ends.
   */
  fn: () => void;

  /**
   * The duration in milliseconds to wait for the hover before triggering fn
   */
  delayMs: number;
};

type UseHoverDelayHandlers = {
  onEnter?: UseHoverDelayHandler;
  onLeave?: UseHoverDelayHandler;
};

type UseHoverDelayOptions = {
  /**
   * If true, the hover delay will not be triggered.
   *
   * @default false
   */
  disabled?: ComputedRef<boolean> | boolean;
};

/**
 * Tracks mouse hover within an element and after a delay triggers the handler
 *
 * @param target - The element to track mouse hover within.
 * @param openHandler - The function to call when the hover starts after a delay.
 * @param closeHandler - The function to call when the hover ends after a delay.
 */
export async function useHoverDelay(
  target: ComputedRef<HTMLElement | undefined>,
  handlers: UseHoverDelayHandlers,
  options: UseHoverDelayOptions = {}
) {
  const { disabled = false } = options;

  let timeout: ReturnType<typeof setTimeout> | undefined;

  function clear() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
  }

  function trigger(
    event: keyof DocumentEventMap,
    handler?: UseHoverDelayHandler
  ) {
    if (!handler) return;
    return useEventListener(target, event, () => () => {
      clear();
      timeout = setTimeout(handler.fn, handler.delayMs);
    });
  }

  let openHandler: Fn | undefined;
  let closeHandler: Fn | undefined;

  watch(
    () => disabled,
    () => {
      clear();
      if (unref(disabled)) {
        openHandler?.();
        closeHandler?.();
        return;
      } else {
        openHandler = trigger("mouseenter", handlers.onEnter);
        closeHandler = trigger("mouseleave", handlers.onLeave);
      }
    },
    { immediate: true }
  );
}
