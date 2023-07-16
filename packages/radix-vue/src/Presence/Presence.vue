<script setup lang="ts">
import {
  ref,
  toRefs,
  useSlots,
  vShow,
  withDirectives,
  type Directive,
} from "vue";
import { usePresence } from "./usePresence";
import { syncRef } from "@vueuse/core";

interface PresenceProps {
  // children: HTMLElement | ((props: { present: boolean }) => HTMLElement);
  present: boolean;
}
const props = defineProps<PresenceProps>();
const { present } = toRefs(props);

const slots = useSlots();
let isLocalPresence = ref(false);

const vTest: Directive = {
  created(el) {
    const { isPresent } = usePresence(present, el);
    syncRef(isLocalPresence, isPresent, { direction: "rtl" });
  },
};

const render = () =>
  // @ts-ignore
  withDirectives(slots.default?.()?.[0], [
    [vTest],
    [vShow, isLocalPresence.value],
  ]);

defineExpose({
  present: isLocalPresence,
});
</script>

<template>
  <render></render>
</template>
