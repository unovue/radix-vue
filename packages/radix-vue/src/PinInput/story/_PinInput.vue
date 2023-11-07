<script setup lang="ts">
import { ref } from 'vue'
import { PinInputInput, PinInputLabel, PinInputRoot, type PinInputRootEmits, type PinInputRootProps } from '..'
import { useEmitAsProps } from '@/shared'

const props = defineProps<PinInputRootProps>()
const emits = defineEmits<PinInputRootEmits>()

const value = ref<string[]>([])
</script>

<template>
  <PinInputRoot
    v-model="value"
    class="flex gap-2 items-center"
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
  >
    <PinInputLabel>Test label</PinInputLabel>
    <PinInputInput
      v-for="(id, index) in 5"
      :key="id"
      class="w-10 h-10 rounded text-center text-green10 placeholder:text-mauve5"
      :index="index"
    />
  </PinInputRoot>
</template>
