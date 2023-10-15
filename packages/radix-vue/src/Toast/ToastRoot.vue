<script setup lang="ts">
import { Presence } from '@/Presence'
import ToastRootImpl, { type ToastRootImplEmits, type ToastRootImplProps } from './ToastRootImpl.vue'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<ToastRootProps>(), {
  type: 'foreground',
  open: undefined,
  defaultOpen: true,
})
const emits = defineEmits<ToastRootEmits>()

export interface ToastRootProps extends ToastRootImplProps {
  defaultOpen?: boolean
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}

export type ToastRootEmits = ToastRootImplEmits & {
  'update:open': [value: boolean]
}

const open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
})
</script>

<template>
  <Presence :present="forceMount || open">
    <ToastRootImpl
      :open="open"
      :type="type"
      :duration="duration"
      v-bind="$attrs"
      @close="open = false"
      @pause="emits('pause')"
      @resume="emits('resume')"
      @escape-key-down="emits('escapeKeyDown', $event)"
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
    </ToastRootImpl>
  </Presence>
</template>
