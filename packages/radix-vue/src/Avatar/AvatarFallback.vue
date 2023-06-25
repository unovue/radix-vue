<script setup lang="ts">
import { inject, ref } from "vue";
import {
  AVATAR_INJECTION_KEY,
  type AvatarProvideValue,
} from "./AvatarRoot.vue";

interface AvatarFallbackProps {
  delayMs?: number;
}

const injectedValue = inject<AvatarProvideValue>(AVATAR_INJECTION_KEY);

const props = withDefaults(defineProps<AvatarFallbackProps>(), {
  delayMs: 0,
});

let canRender = ref<boolean>();
let timeout: ReturnType<typeof setTimeout> | undefined;

if (props.delayMs) {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    canRender.value = true;
  }, props.delayMs);
} else {
  canRender.value = true;
}
</script>

<template>
  <span
    v-if="canRender && injectedValue?.imageLoadingStatus.value !== 'loaded'"
  >
    <slot />
  </span>
</template>
