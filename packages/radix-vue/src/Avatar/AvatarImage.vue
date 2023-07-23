<script lang="ts">
export interface AvatarImageProps extends PrimitiveProps {
  onLoadingStatusChange?: void;
}
</script>

<script setup lang="ts">
import { inject, useAttrs, watch } from "vue";
import {
  AVATAR_INJECTION_KEY,
  type AvatarProvideValue,
} from "./AvatarRoot.vue";
import { PrimitiveImg, type PrimitiveProps } from "../Primitive";
import { useImageLoadingStatus } from "./utils";

const injectedValue = inject<AvatarProvideValue>(AVATAR_INJECTION_KEY);

const props = defineProps<AvatarImageProps>();
const src = useAttrs().src as string;
const imageLoadingStatus = useImageLoadingStatus(src);

watch(
  imageLoadingStatus,
  (newValue) => {
    if (newValue !== "idle") injectedValue!.imageLoadingStatus.value = newValue;
  },
  { immediate: true }
);
</script>

<template>
  <PrimitiveImg
    v-if="imageLoadingStatus === 'loaded'"
    :as-child="props.asChild"
  >
    <slot></slot>
  </PrimitiveImg>
</template>
