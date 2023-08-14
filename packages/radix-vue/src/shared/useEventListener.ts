import {
  unrefElement,
  type MaybeElementRef,
  type MaybeRef,
} from "@vueuse/core";
import { tryOnScopeDispose } from "@vueuse/shared";
import { unref, watch } from "vue";

export type UseEventListenerOptions = {
  /**
   * Wether or not disable the listener
   *
   * @default false
   */
  disabled?: MaybeRef<boolean>;

  /**
   * Ignore the event if the target is the element or any of its children
   */
  exclude?: MaybeRef<HTMLElement | undefined>[];
};

export type DocumentEventName = keyof DocumentEventMap;

export function useEventListener<
  EventName extends keyof HTMLElementEventMap,
  Event extends HTMLElementEventMap[EventName]
>(
  target: MaybeElementRef,
  eventName: EventName,
  listener: (ev: Event) => void,
  options: UseEventListenerOptions = {}
) {
  const cleanups: Function[] = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };

  function runListener(event: Event) {
    const eventTarget = event.target as Node;
    for (const el of options.exclude || []) {
      const exclude = unrefElement(el);
      if (exclude?.isEqualNode(eventTarget) || exclude?.contains(eventTarget))
        return;
    }

    listener(event);
  }

  function register(el: any) {
    const options = {
      passive: true,
      capture: true,
    };
    el.addEventListener(eventName, runListener, options);
    return () => {
      el.removeEventListener(eventName, runListener, options);
    };
  }

  function start(el?: any) {
    cleanup();
    if (!el) return;
    cleanups.push(register(el));
  }

  let stopWatch: Function = () => { };

  const stop = () => {
    stopWatch();
    cleanup();
  };

  watch(
    () => unref(options.disabled),
    (isDisabled) => {
      if (isDisabled) {
        stop();
      } else {
        stopWatch = watch(
          () => unrefElement(target),
          (el) => start(el),
          {
            immediate: true,
            flush: "post",
          }
        );
      }
    },
    {
      immediate: true,
      flush: "post",
    }
  );

  tryOnScopeDispose(stop);

  return stop;
}
