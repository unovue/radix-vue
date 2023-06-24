<script setup>
import { inject } from "vue";

const checked = inject("refChecked");
</script>

<template>
  <span v-if="checked">
    <slot />
  </span>
</template>
