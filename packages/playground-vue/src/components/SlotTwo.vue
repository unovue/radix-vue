<template>
  <p>Slot2</p>
  {{ message }}
</template>

<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>