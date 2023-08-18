<script lang="ts">
export interface AvatarImageProps extends PrimitiveProps {}
export interface AvatarImageEmits {
  (e: "loadingStatusChange", value: ImageLoadingStatus): void;
}
</script>

<script setup lang="ts">
import { inject, useAttrs, watch } from "vue";
import { AVATAR_INJECTION_KEY } from "./AvatarRoot.vue";
import { Primitive, type PrimitiveProps } from "../Primitive";
import { useImageLoadingStatus, type ImageLoadingStatus } from "./utils";

const injectedValue = inject(AVATAR_INJECTION_KEY);

const props = withDefaults(defineProps<AvatarImageProps>(), { as: "img" });
const emits = defineEmits<AvatarImageEmits>();

const src = useAttrs().src as string;
const imageLoadingStatus = useImageLoadingStatus(src);

watch(
  imageLoadingStatus,
  (newValue) => {
    emits("loadingStatusChange", newValue);
    if (newValue !== "idle") injectedValue!.imageLoadingStatus.value = newValue;
  },
  { immediate: true }
);
</script>

<template>
  <Primitive
    v-if="imageLoadingStatus === 'loaded'"
    :as-child="props.asChild"
    :as="as"
  >
    <slot></slot>
  </Primitive>
</template>
