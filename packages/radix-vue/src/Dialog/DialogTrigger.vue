<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import BaseDialogTrigger from "../shared/component/BaseDialogTrigger.vue";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
</script>

<template>
  <BaseDialogTrigger :injected-value="injectedValue">
    <slot />
  </BaseDialogTrigger>
</template>
