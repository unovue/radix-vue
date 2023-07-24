<script setup lang="ts">
import {
  ref,
  toRefs,
  useSlots,
  withDirectives,
  type Directive,
  type VNode,
} from "vue";
import { usePresence } from "./usePresence";
import { syncRef } from "@vueuse/core";

interface PresenceProps {
  present: boolean;
  forceMount?: boolean;
}

const props = defineProps<PresenceProps>();
const { present, forceMount } = toRefs(props);

const slots = useSlots();
const isLocalPresence = ref(props.forceMount || props.present);
const node = ref<HTMLElement>();
const { isPresent } = usePresence(present, node);

const vPresence: Directive = {
  created(el) {
    syncRef(isLocalPresence, isPresent, { direction: "rtl" });
    node.value = el;
  },
};

const render = () =>
  forceMount.value || present.value || isLocalPresence.value
    ? withDirectives(
        slots.default?.({ present: isLocalPresence })?.[0] as VNode,
        [[vPresence]]
      )
    : null;

defineExpose({
  present: isLocalPresence,
});
</script>

<template>
  <render />
</template>
