<script lang="ts">
import type { DialogProvideValue } from "../../Dialog/DialogRoot.vue";

export interface BaseDialogProps {
  injectedValue?: DialogProvideValue;
}
</script>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<BaseDialogProps>();

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  props.injectedValue!.triggerButton.value = triggerElement.value!;
});
</script>

<template>
  <button
    type="button"
    ref="triggerElement"
    :aria-expanded="props.injectedValue?.open.value || false"
    :data-state="props.injectedValue?.open.value ? 'open' : 'closed'"
    @click="props.injectedValue?.openModal"
  >
    <slot />
  </button>
</template>
