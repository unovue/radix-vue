<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import {
  MenuRoot,
  MenuAnchor,
  MenuPortal,
  MenuContent,
  type MenuProps,
} from "..";

interface Props extends MenuProps {}
const props = withDefaults(defineProps<Props>(), {
  open: true,
});

const open = useVModel(props, "open");
</script>

<template>
  <MenuRoot :open="open" :modal="false">
    <MenuAnchor :style="{ display: 'inline-block' }" />
    <MenuPortal>
      <MenuContent
        class="inline-block box-border min-w-[130px] bg-white border border-gray-100 rounded-[6px] p-[5px] shadow-md font-sans text-sm focus-within:border-black"
        @close-auto-focus.prevent
        :align="'start'"
      >
        <slot></slot>
      </MenuContent>
    </MenuPortal>
  </MenuRoot>
</template>
