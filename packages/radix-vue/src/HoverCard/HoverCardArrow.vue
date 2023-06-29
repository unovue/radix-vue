<script lang="ts">
import { inject } from "vue";
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from "./HoverCardRoot.vue";
import {
  HOVER_CARD_CONTENT_INJECTION_KEY,
  type HoverCardContentProvideValue,
} from "./HoverCardContent.vue";
import BaseArrow from "../shared/component/BaseArrow.vue";

interface HoverCardArrowProps {
  asChild?: boolean;
  size?: number;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<HoverCardArrowProps>(), {
  size: 10,
  asChild: false,
});

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY);

const injectedContentValue = inject<HoverCardContentProvideValue>(
  HOVER_CARD_CONTENT_INJECTION_KEY
);
</script>

<template>
  <BaseArrow
    :injected-value="injectedValue"
    :injected-content-value="injectedContentValue"
    :size="props.size"
  />
</template>
