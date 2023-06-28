<script lang="ts">
interface AvatarImageProps {
  asChild?: boolean;
  onLoadingStatusChange?: void;
}
</script>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import {
  AVATAR_INJECTION_KEY,
  type AvatarProvideValue,
} from "./AvatarRoot.vue";

const injectedValue = inject<AvatarProvideValue>(AVATAR_INJECTION_KEY);

onMounted(() => {
  injectedValue!.imageLoadingStatus.value = "loaded";
});

const props = withDefaults(defineProps<AvatarImageProps>(), {
  asChild: false,
});
</script>

<template>
  <img :asChild="props.asChild ? '' : undefined" />
</template>
