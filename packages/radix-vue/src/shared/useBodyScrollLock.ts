import { useScrollLock, defaultDocument } from "@vueuse/core";
import { isClient } from "@vueuse/shared";
import { computed } from "vue";

export const useBodyScrollLock = (initialState?: boolean | undefined) => {
  const locked = useScrollLock(defaultDocument?.body, initialState);

  return computed<boolean>({
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
};
