<script lang="ts">
import type { Side } from "./utils";
const OPPOSITE_SIDE: Record<Side, Side> = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
};

export interface PopperArrowProps extends ArrowProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  POPPER_CONTENT_KEY,
  type PopperContentContextValue,
} from "./PopperContent.vue";
import Arrow from "@/shared/component/Arrow.vue";
import { type ArrowProps } from "@/shared/component/Arrow.vue";

const contentContext = inject<PopperContentContextValue>(POPPER_CONTENT_KEY);

defineProps<PopperArrowProps>();

const baseSide = contentContext?.placedSide
  ? OPPOSITE_SIDE[contentContext?.placedSide]
  : "";
</script>

<template>
  <span
    :ref="((el: HTMLElement) => {
      contentContext!.onArrowChange(el) 
      return undefined
    })"
    :style="{
      position: 'absolute',
      left: `${contentContext!.arrowX?.value}px`,
      top: `${contentContext!.arrowY?.value}px`,
      [baseSide]: 0,
      transformOrigin: {
        top: '',
        right: '0 0',
        bottom: 'center 0',
        left: '100% 0',
      }[contentContext!.placedSide],
      transform: {
        top: 'translateY(100%)',
        right: 'translateY(50%) rotate(90deg) translateX(-50%)',
        bottom: `rotate(180deg)`,
        left: 'translateY(50%) rotate(-90deg) translateX(50%)',
      }[contentContext!.placedSide],
      visibility: contentContext!.shouldHideArrow.value ? 'hidden' : undefined,
    }"
  >
    <Arrow
      :style="{
        display: 'block',
      }"
    ></Arrow>
  </span>
</template>
