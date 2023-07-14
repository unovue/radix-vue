import { useStateMachine } from "@/shared";
import { ref, watchEffect, type Ref, computed, nextTick } from "vue";

export function usePresence(present: Ref<boolean>, node: HTMLElement) {
  const stylesRef = ref<CSSStyleDeclaration>({} as any);
  const prevPresentRef = ref(present.value);
  const prevAnimationNameRef = ref<string>("none");
  const initialState = present.value ? "mounted" : "unmounted";

  const { state, dispatch } = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended",
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted",
    },
    unmounted: {
      MOUNT: "mounted",
    },
  });

  // watchEffect(() => {
  //   const currentAnimationName = getAnimationName(node);
  //   prevAnimationNameRef.value =
  //     state.value === "mounted" ? currentAnimationName : "none";
  // });

  watchEffect(async () => {
    const styles = stylesRef.value;
    const wasPresent = prevPresentRef.value;
    const hasPresentChanged = wasPresent !== present.value;
    await nextTick();
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.value;
      const currentAnimationName = getAnimationName(node);
      if (present.value) {
        dispatch("MOUNT");
      } else if (
        currentAnimationName === "none" ||
        styles?.display === "none"
      ) {
        // If there is no exit animation or the element is hidden, animations won't run
        // so we unmount instantly
        dispatch("UNMOUNT");
      } else {
        /**
         * When `present` changes to `false`, we check changes to animation-name to
         * determine whether an animation has started. We chose this approach (reading
         * computed styles) because there is no `animationrun` event and `animationstart`
         * fires after `animation-delay` has expired which would be too late.
         */
        const isAnimating = prevAnimationName !== currentAnimationName;
        console.log(isAnimating, prevAnimationName, currentAnimationName);
        if (wasPresent && isAnimating) {
          dispatch("ANIMATION_OUT");
        } else {
          dispatch("UNMOUNT");
        }
      }

      prevPresentRef.value = present.value;
    }
  });

  if (node) {
    /**
     * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
     * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
     * make sure we only trigger ANIMATION_END for the currently active animation.
     */
    const handleAnimationEnd = (event: AnimationEvent) => {
      const currentAnimationName = getAnimationName(node);
      const isCurrentAnimation = currentAnimationName.includes(
        event.animationName
      );
      if (event.target === node && isCurrentAnimation) {
        // With React 18 concurrency this update is applied
        // a frame after the animation ends, creating a flash of visible content.
        // By manually flushing we ensure they sync within a frame, removing the flash.
        // ReactDOM.flushSync(() => dispatch("ANIMATION_END"));
        dispatch("ANIMATION_END");
      }
    };
    const handleAnimationStart = (event: AnimationEvent) => {
      if (event.target === node) {
        // if animation occurred, store its name as the previous animation.
        prevAnimationNameRef.value = getAnimationName(node);
      }
    };
    node.addEventListener("animationstart", handleAnimationStart);
    node.addEventListener("animationcancel", handleAnimationEnd);
    node.addEventListener("animationend", handleAnimationEnd);

    // node.removeEventListener("animationstart", handleAnimationStart);
    // node.removeEventListener("animationcancel", handleAnimationEnd);
    // node.removeEventListener("animationend", handleAnimationEnd);
  } else {
    // Transition to the unmounted state if the node is removed prematurely.
    // We avoid doing so during cleanup as the node may change but still exist.
    dispatch("ANIMATION_END");
  }

  const isPresent = computed(() =>
    ["mounted", "unmountSuspended"].includes(state.value)
  );

  stylesRef.value = getComputedStyle(node);

  return {
    isPresent,
  };
}

function getAnimationName(node: HTMLElement) {
  return node ? getComputedStyle(node).animationName || "none" : "none";
}
