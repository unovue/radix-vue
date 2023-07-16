<script lang="ts">
export interface AvatarImageProps {
  asChild?: boolean;
  onLoadingStatusChange?: void;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  AVATAR_INJECTION_KEY,
  type AvatarProvideValue,
} from "./AvatarRoot.vue";
import { PrimitiveImg } from "../Primitive";

const injectedValue = inject<AvatarProvideValue>(AVATAR_INJECTION_KEY);

withDefaults(defineProps<AvatarImageProps>(), {
  asChild: false,
});

function setImageLoad() {
  injectedValue!.imageLoadingStatus.value = "loaded";
}
</script>

<template>
  <PrimitiveImg :asChild="asChild" @load="setImageLoad"/>
</template>
