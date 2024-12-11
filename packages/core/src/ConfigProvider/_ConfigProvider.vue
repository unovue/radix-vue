<script setup lang="ts">
import ConfigProvider, { type ConfigProviderProps } from './ConfigProvider.vue'
import DropdownMenu from '../DropdownMenu/story/_DropdownMenu.vue'

const props = withDefaults(defineProps<ConfigProviderProps>(), { scrollBody: undefined })
</script>

<template>
  <ConfigProvider v-bind="props">
    <DropdownMenu :default-open="true" />
  </ConfigProvider>
</template>
