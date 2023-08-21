<script setup lang="ts">
import { ref } from 'vue'
import SwitchRoot from '../SwitchRoot.vue'
import SwitchThumb from '../SwitchThumb.vue'

const checked = ref(false)
</script>

<template>
  <p>{{ checked ? "checked" : "unchecked" }}</p>
  <SwitchRoot id="airplane-mode" v-model:checked="checked" data-testId="root">
    <SwitchThumb data-testId="thumb" />
  </SwitchRoot>
</template>
