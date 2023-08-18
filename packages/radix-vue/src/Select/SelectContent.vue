<script setup lang="ts">
import { inject } from "vue";
import SelectContentImpl, {
  type SelectContentImplProps,
  type SelectContentImplEmits,
} from "./SelectContentImpl.vue";
import { Presence } from "@/Presence";
import { SELECT_INJECTION_KEY } from "./SelectRoot.vue";
import { useEmitAsProps } from "@/shared";

export interface SelectContentProps extends SelectContentImplProps {}
export type SelectContentEmits = SelectContentImplEmits;

const context = inject(SELECT_INJECTION_KEY);

const props = defineProps<SelectContentProps>();
const emits = defineEmits<SelectContentEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <Presence :present="context!.open.value">
    <SelectContentImpl v-bind="{ ...props, ...emitsAsProps }">
      <slot></slot>
    </SelectContentImpl>
  </Presence>
</template>
