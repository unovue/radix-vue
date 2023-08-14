import {
  nextTick,
  unref,
  watch,
  type MaybeRef,
  type Ref,
  VueElement,
} from "vue";
import { trapFocus } from "./trap-focus";
import { useEmitCancelableEvent } from "./useEmitCancelableEvent";
import { unrefElement, type MaybeRefOrGetter } from "@vueuse/core";

type InjectedModalValue = {
  open: Ref<boolean>;
  triggerElement: MaybeRefOrGetter<HTMLElement | null | undefined>;
};

type UseModalInteractionOptions = {
  /**
   * Whether or not should emit a `open` event when the modal opens.
   * If event is not prevented, the modal will automatically focus on the first focusable element.
   *
   * @default true
   */
  handleFocusOnOpen?: MaybeRef<boolean>;

  /**
   * Whether or not should emit a `close` event when the modal closes.
   * If event is not prevented, the trigger element will be focused.
   *
   * @default true
   */
  handleFocusOnClose?: MaybeRef<boolean>;

  /**
   * Body interactive when the modal is open.
   *
   * @default true
   */
  bodyInteractive?: MaybeRef<boolean>;
};

export function useModalInteraction(
  content: MaybeRef<HTMLElement | undefined>,
  injected: InjectedModalValue,
  emit: ReturnType<typeof defineEmits>,
  options: UseModalInteractionOptions = {}
) {
  const { open, triggerElement } = injected;
  const {
    handleFocusOnOpen = true,
    handleFocusOnClose = true,
    bodyInteractive = true,
  } = options;

  function modalOpened() {
    if (!unref(bodyInteractive)) {
      document.body.style.pointerEvents = "none";
    }
    if (!unref(handleFocusOnOpen)) return;
    useEmitCancelableEvent(
      () => emit("open"),
      "open",
      () => {
        const element = unref(content);
        element && trapFocus(element);
      }
    );
  }

  function modalClosed() {
    if (!unref(bodyInteractive)) {
      document.body.style.pointerEvents = "";
    }
    if (!unref(handleFocusOnClose)) return;
    useEmitCancelableEvent(emit, "close", () =>
      unrefElement(triggerElement)?.focus()
    );
  }

  watch(
    () => open.value,
    async (isOpen) => {
      await nextTick();
      isOpen ? modalOpened() : modalClosed();
    },
    { immediate: true, flush: "post" }
  );
}
