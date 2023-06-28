<script lang="ts">
import { inject } from "vue";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  DROPDOWN_MENU_CONTENT_INJECTION_KEY,
  type DropdownMenuContentProvideValue,
} from "./DropdownMenuContent.vue";
import BaseArrow from "../shared/component/BaseArrow.vue";

interface DropdownMenuArrowProps {
  size?: number;
}
</script>

<script setup lang="ts">
const props = defineProps<DropdownMenuArrowProps>();

const injectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const injectedContentValue = inject<DropdownMenuContentProvideValue>(
  DROPDOWN_MENU_CONTENT_INJECTION_KEY
);
</script>

<template>
  <BaseArrow
    :injected-value="injectedValue"
    :injected-content-value="injectedContentValue"
    :size="props.size"
  />
</template>
