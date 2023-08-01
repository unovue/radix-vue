<script setup lang="ts">
import { ref } from "vue";
import Presence from "../Presence.vue";
import Toggle from "./_Toggle.vue";

const open = ref(false);
const node = ref<HTMLElement>();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="h-64">
    <Toggle :node="node" v-model:open="open"></Toggle>
    <Presence :present="open">
      <div v-bind="$attrs" :data-state="open ? 'open' : 'closed'" ref="node">
        Content
      </div>
    </Presence>
  </div>
</template>
