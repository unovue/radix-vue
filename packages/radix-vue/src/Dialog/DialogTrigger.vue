<script lang="ts">
export interface DialogTriggerProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import { PrimitiveButton } from "../Primitive";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const props = withDefaults(defineProps<DialogTriggerProps>(), {
  asChild: false,
});

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue.triggerButton.value = triggerElement.value;
});
</script>

<template>
  <PrimitiveButton
    :asChild="props.asChild ? '' : undefined"
    type="button"
    ref="triggerElement"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.openModal"
  >
    <slot />
  </PrimitiveButton>
</template>
