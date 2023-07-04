<script lang="ts">
import type { Ref, InjectionKey } from "vue";

type ImageLoadingStatus = "loading" | "loaded";

export interface AvatarRootProps {
  asChild?: boolean;
}

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

const props = withDefaults(defineProps<AvatarRootProps>(), {
  asChild: false,
});

provide<AvatarProvideValue>(AVATAR_INJECTION_KEY, {
  imageLoadingStatus: imageLoadingStatusRef,
});
</script>

<template>
  <PrimitiveSpan :asChild="props.asChild">
    <slot />
  </PrimitiveSpan>
</template>
