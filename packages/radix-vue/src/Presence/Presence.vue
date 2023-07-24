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

interface PresenceProps {
  present: boolean;
  forceMount?: boolean;
}

const props = defineProps<PresenceProps>();
const { present, forceMount } = toRefs(props);

const slots = useSlots();
const node = ref<HTMLElement>();
const { isPresent } = usePresence(present, node);

const vPresence: Directive = {
  created(el) {
    node.value = el;
  },
};

const render = () =>
  forceMount.value || present.value || isPresent.value
    ? withDirectives(slots.default?.()?.[0] as VNode, [[vPresence]])
    : null;

defineExpose({
  present: isPresent,
});
</script>

<template>
  <render />
</template>
