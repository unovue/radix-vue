<script setup lang="ts">
import { inject } from "vue";
import { TABS_INJECTION_KEY } from "./TabsRoot.vue";
import type { TabsProvideValue } from "./TabsRoot.vue";

const injectedValue = inject<TabsProvideValue>(TABS_INJECTION_KEY);

</script>

<template>
  <span :style="`right: ${100 - injectedValue.}%`" />
</template>