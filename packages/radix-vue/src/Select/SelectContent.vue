<script setup lang="ts">
import { inject } from "vue";
import SelectContentImpl, {
  type SelectContentImplProps,
} from "./SelectContentImpl.vue";
import { Presence } from "@/Presence";
import { SELECT_INJECTION_KEY } from "./SelectRoot.vue";
interface SelectContentProps extends SelectContentImplProps {}

const context = inject(SELECT_INJECTION_KEY);

const props = defineProps<SelectContentProps>();
</script>

<template>
  <Presence :present="context!.open.value">
    <SelectContentImpl v-bind="props">
      <slot></slot>
    </SelectContentImpl>
  </Presence>
</template>
