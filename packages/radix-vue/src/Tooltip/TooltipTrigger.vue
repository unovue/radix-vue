<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export type TooltipTriggerDataState =
  | 'closed'
  | 'delayed-open'
  | 'instant-open'

export interface TooltipTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { injectTooltipRootContext } from './TooltipRoot.vue'
import { PopperAnchor } from '@/Popper'
import {
  Primitive,
} from '@/Primitive'
import { injectTooltipProviderContext } from './TooltipProvider.vue'

const props = withDefaults(defineProps<TooltipTriggerProps>(), {
  as: 'button',
})
const rootContext = injectTooltipRootContext()
const providerContext = injectTooltipProviderContext()

const { forwardRef, currentElement: triggerElement } = useForwardRef()

const isPointerDown = ref(false)
const hasPointerMoveOpened = ref(false)

function handlePointerUp() {
  isPointerDown.value = false
}

function handlePointerDown() {
  isPointerDown.value = true
  document.addEventListener('pointerup', handlePointerUp, { once: true })
}

onMounted(() => {
  rootContext.onTriggerChange(triggerElement.value)
})
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      :ref="forwardRef"
      :aria-describedby="
        rootContext.open.value ? rootContext.contentId : undefined
      "
      :data-state="rootContext.stateAttribute.value"
      :as="as"
      :as-child="props.asChild"
      @pointermove="(event) => {
        if (event.pointerType === 'touch') return;
        if (
          !hasPointerMoveOpened && !providerContext.isPointerInTransitRef.value
        ) {
          rootContext.onTriggerEnter();
          hasPointerMoveOpened = true;
        }
      }"
      @pointerleave="(event) => {
        rootContext.onTriggerLeave();
        hasPointerMoveOpened = false;
      }"
      @pointerdown="handlePointerDown"
      @focus="() => {
        if (!isPointerDown) rootContext.onOpen()
      }"
      @blur="rootContext.onClose()"
      @click="() => {
        if (!rootContext.disableClosingTrigger.value) rootContext.onClose()
      }"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
