<script lang="ts" setup>
import { PopoverArrow } from '..'
</script>

<template>
  <PopoverArrow :class="$attrs.class">
    <slot />
  </PopoverArrow>
</template>
