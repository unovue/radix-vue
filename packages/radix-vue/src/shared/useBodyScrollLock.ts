import {
  useScrollLock,
  defaultDocument,
  createGlobalState,
} from "@vueuse/core";
import { isClient } from "@vueuse/shared";
import { computed, onBeforeUnmount, ref } from "vue";

const useBodyLockStackCount = createGlobalState(() => ref(0));

export const useBodyScrollLock = (initialState?: boolean | undefined) => {
  const stack = useBodyLockStackCount();
  const locked = useScrollLock(defaultDocument?.body, false);

  const writableLock = computed<boolean>({
    get() {
      return locked.value;
    },
    set(newLocked) {
      if (!isClient) return;

      if (newLocked) {
        const verticalScrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        if (verticalScrollbarWidth > 0) {
          document.body.style.marginRight = verticalScrollbarWidth + "px";
        }

        document.body.style.pointerEvents = "none";
        locked.value = true;
      } else {
        document.body.style.marginRight = "";
        document.body.style.pointerEvents = "";
        locked.value = false;
      }
    },
  });

  if (initialState) writableLock.value = initialState;
  stack.value++;

  onBeforeUnmount(() => {
    stack.value--;
    if (stack.value === 0) {
      document.body.style.marginRight = "";
      document.body.style.pointerEvents = "";
    }
  });

  return writableLock;
};
