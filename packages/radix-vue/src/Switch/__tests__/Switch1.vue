<script setup lang="ts">
import SwitchRoot from "../SwitchRoot.vue";
import SwitchThumb from "../SwitchThumb.vue";
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
  <p>{{ checked ? "checked" : "unchecked" }}</p>
  <SwitchRoot v-model:checked="checked" id="airplane-mode" data-testId="root">
    <SwitchThumb data-testId="thumb"></SwitchThumb>
  </SwitchRoot>
</template>
