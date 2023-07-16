<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import { type PrimitiveProps } from "@/Primitive";

type ImageLoadingStatus = "loading" | "loaded";

export interface AvatarRootProps extends PrimitiveProps {}

export const AVATAR_INJECTION_KEY =
  Symbol() as InjectionKey<AvatarProvideValue>;

export interface AvatarProvideValue {
  imageLoadingStatus: Ref<ImageLoadingStatus>;
}
</script>

<script setup lang="ts">
import { ref, provide } from "vue";
import { PrimitiveSpan } from "../Primitive";

const imageLoadingStatusRef = ref<ImageLoadingStatus>("loading");

const props = defineProps<AvatarRootProps>();

provide<AvatarProvideValue>(AVATAR_INJECTION_KEY, {
  imageLoadingStatus: imageLoadingStatusRef,
});
</script>

<template>
  <PrimitiveSpan :as-child="props.asChild">
    <slot />
  </PrimitiveSpan>
</template>
