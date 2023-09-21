<script setup lang="ts">
import { Presence } from '@/Presence'
import ToastImpl, { type ToastImplEmits, type ToastImplProps } from './ToastImpl.vue'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<ToastProps>(), {
  type: 'foreground',
  open: true,
})
const emits = defineEmits<ToastEmits>()

export interface ToastProps extends ToastImplProps {
  defaultOpen?: boolean
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}

export type ToastEmits = ToastImplEmits & {
  'update:open': [value: boolean]
}

const open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: !props.open as false,
})
</script>

<template>
  <Presence :present="forceMount || open">
    <ToastImpl
      :open="open"
      :type="type"
      :duration="duration"
      v-bind="$attrs"
      @close="open = false"
      @pause="emits('pause')"
      @resume="emits('resume')"
      @swipe-start="(event) => {
        emits('swipeStart', event);
        (event.currentTarget as HTMLElement).setAttribute('data-swipe', 'start');
      }"
      @swipe-move="(event) => {
        const { x, y } = event.detail.delta;
        const target = event.currentTarget as HTMLElement
        target.setAttribute('data-swipe', 'move');
        target.style.setProperty('--radix-toast-swipe-move-x', `${x}px`);
        target.style.setProperty('--radix-toast-swipe-move-y', `${y}px`);
      }"
      @swipe-cancel="(event) => {
        const target = event.currentTarget as HTMLElement
        target.setAttribute('data-swipe', 'cancel');
        target.style.removeProperty('--radix-toast-swipe-move-x');
        target.style.removeProperty('--radix-toast-swipe-move-y');
        target.style.removeProperty('--radix-toast-swipe-end-x');
        target.style.removeProperty('--radix-toast-swipe-end-y');
      }"
      @swipe-end="(event) => {
        const { x, y } = event.detail.delta;
        const target = event.currentTarget as HTMLElement
        target.setAttribute('data-swipe', 'end');
        target.style.removeProperty('--radix-toast-swipe-move-x');
        target.style.removeProperty('--radix-toast-swipe-move-y');
        target.style.setProperty('--radix-toast-swipe-end-x', `${x}px`);
        target.style.setProperty('--radix-toast-swipe-end-y', `${y}px`);
        open = false;
      }"
    >
      <slot />
    </ToastImpl>
  </Presence>
</template>
