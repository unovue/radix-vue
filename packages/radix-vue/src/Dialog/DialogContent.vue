<script setup lang="ts">
import DialogContentModal from "./DialogContentModal.vue";
import DialogContentNonModal from "./DialogContentNonModal.vue";
import {
  type DialogContentImplProps,
  type DialogContentImplEmits,
} from "./DialogContentImpl.vue";
import { inject } from "vue";
import { DIALOG_INJECTION_KEY } from "./DialogRoot.vue";
import { Presence } from "@/Presence";

const context = inject(DIALOG_INJECTION_KEY);

const props = defineProps<DialogContentImplProps>();
const emits = defineEmits<DialogContentImplEmits>();
</script>

<template>
  <Presence :present="context!.open.value">
    <DialogContentModal
      v-if="context?.modal.value"
      v-bind="{ ...props, ...$attrs }"
    >
      <slot></slot>
    </DialogContentModal>
    <DialogContentNonModal v-bind="{ ...props, ...$attrs }" v-else>
      <slot></slot>
    </DialogContentNonModal>
  </Presence>
</template>
