<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    :to="href"
    :target="target"
    class="text-sky-500 hover:underline underline-offset-3"
  >
    <slot />
  </NuxtLink>
</template>
