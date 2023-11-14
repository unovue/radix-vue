<script setup lang="ts">
import { ref } from 'vue'
import { PinInputInput, PinInputRoot, type PinInputRootEmits, type PinInputRootProps } from '..'
import { Label } from '@/Label'
import { useEmitAsProps } from '@/shared'

const props = defineProps<PinInputRootProps>()
const emits = defineEmits<PinInputRootEmits>()

const value = ref<string[]>([])
</script>

<template>
  <Label for="otp">Test label</Label>
  <PinInputRoot
    v-model="value"
    class="flex gap-2 items-center"
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
  >
    <PinInputInput
      v-for="(id, index) in 5"
      :key="id"
      class="w-10 h-10 rounded text-center text-green10 placeholder:text-mauve5"
      :index="index"
    />
  </PinInputRoot>
</template>
