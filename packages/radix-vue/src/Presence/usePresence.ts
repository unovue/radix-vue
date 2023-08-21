import { type Ref, computed, nextTick, onUnmounted, ref, watch } from 'vue'
import { useStateMachine } from '@/shared'

export function usePresence(
  present: Ref<boolean>,
  node: Ref<HTMLElement | undefined>,
) {
  const stylesRef = ref<CSSStyleDeclaration>({} as any)
  const prevAnimationNameRef = ref<string>('none')
  const initialState = present.value ? 'mounted' : 'unmounted'

  const { state, dispatch } = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: 'unmounted',
      ANIMATION_OUT: 'unmountSuspended',
    },
    unmountSuspended: {
      MOUNT: 'mounted',
      ANIMATION_END: 'unmounted',
    },
    unmounted: {
      MOUNT: 'mounted',
    },
  })

  watch(
    present,
    async (currentPresent, prevPresent) => {
      const hasPresentChanged = prevPresent !== currentPresent
      await nextTick()
      if (hasPresentChanged) {
        const prevAnimationName = prevAnimationNameRef.value
        const currentAnimationName = getAnimationName(node.value)

        if (currentPresent) {
          dispatch('MOUNT')
        }
        else if (
          currentAnimationName === 'none'
          || stylesRef.value?.display === 'none'
        ) {
          // If there is no exit animation or the element is hidden, animations won't run
          // so we unmount instantly rv
          dispatch('UNMOUNT')
        }
        else {
          /**
           * When `present` changes to `false`, we check changes to animation-name to
           * determine whether an animation has started. We chose this approach (reading
           * computed styles) because there is no `animationrun` event and `animationstart`
           * fires after `animation-delay` has expired which would be too late.
           */
          const isAnimating = prevAnimationName !== currentAnimationName
          if (prevPresent && isAnimating)
            dispatch('ANIMATION_OUT')
          else dispatch('UNMOUNT')
        }
      }
    },
    { immediate: true },
  )

  /**
   * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
   * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
   * make sure we only trigger ANIMATION_END for the currently active animation.
   */
  const handleAnimationEnd = (event: AnimationEvent) => {
    const currentAnimationName = getAnimationName(node.value)
    const isCurrentAnimation = currentAnimationName.includes(
      event.animationName,
    )
    if (event.target === node.value && isCurrentAnimation) {
      // With React 18 concurrency this update is applied
      // a frame after the animation ends, creating a flash of visible content.
      // By manually flushing we ensure they sync within a frame, removing the flash.
      // ReactDOM.flushSync(() => dispatch("ANIMATION_END"));
      dispatch('ANIMATION_END')
    }
  }
  const handleAnimationStart = (event: AnimationEvent) => {
    if (event.target === node.value) {
      // if animation occurred, store its name as the previous animation.
      prevAnimationNameRef.value = getAnimationName(node.value)
    }
  }

  const watcher = watch(
    node,
    (newNode, oldNode) => {
      if (newNode) {
        stylesRef.value = getComputedStyle(newNode)
        newNode.addEventListener('animationstart', handleAnimationStart)
        newNode.addEventListener('animationcancel', handleAnimationEnd)
        newNode.addEventListener('animationend', handleAnimationEnd)
      }
      else {
        // Transition to the unmounted state if the node is removed prematurely.
        // We avoid doing so during cleanup as the node may change but still exist.
        dispatch('ANIMATION_END')

        oldNode?.removeEventListener('animationstart', handleAnimationStart)
        oldNode?.removeEventListener('animationcancel', handleAnimationEnd)
        oldNode?.removeEventListener('animationend', handleAnimationEnd)
      }
    },
    { immediate: true },
  )

  const stateWatcher = watch(state, () => {
    const currentAnimationName = getAnimationName(node.value)
    prevAnimationNameRef.value
      = state.value === 'mounted' ? currentAnimationName : 'none'
  })

  onUnmounted(() => {
    watcher()
    stateWatcher()
  })

  const isPresent = computed(() =>
    ['mounted', 'unmountSuspended'].includes(state.value),
  )

  return {
    isPresent,
  }
}

function getAnimationName(node?: HTMLElement) {
  return node ? getComputedStyle(node).animationName || 'none' : 'none'
}
