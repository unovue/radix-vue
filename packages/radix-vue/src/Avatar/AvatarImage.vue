<script lang="ts">
export interface AvatarImageProps extends PrimitiveProps {
  onLoadingStatusChange?: void;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  AVATAR_INJECTION_KEY,
  type AvatarProvideValue,
} from "./AvatarRoot.vue";
import { PrimitiveImg, type PrimitiveProps } from "../Primitive";

const injectedValue = inject<AvatarProvideValue>(AVATAR_INJECTION_KEY);

const props = defineProps<AvatarImageProps>();

function setImageLoad() {
  injectedValue!.imageLoadingStatus.value = "loaded";
}
</script>

<template>
  <PrimitiveImg :as-child="props.asChild" @load="setImageLoad" />
</template>
