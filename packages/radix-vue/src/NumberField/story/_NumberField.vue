<script setup lang="ts">
import type { NumberFieldRootProps } from '../'
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot } from '../'
import { Icon } from '@iconify/vue'

const props = defineProps<NumberFieldRootProps>()
</script>

<template>
  <NumberFieldRoot
    data-testid="root"
    class="text-sm flex items-center border bg-blackA7 border-blackA9 rounded-md text-white"
    v-bind="props"
    id="number-field"
  >
    <label for="number-field" data-testid="label">Number Field</label>
    <NumberFieldDecrement class="p-2" data-testid="decrement">
      <Icon icon="radix-icons:minus" />
    </NumberFieldDecrement>
    <NumberFieldInput data-testid="input" class="bg-transparent w-32 tabular-nums focus:outline-0 p-1" />
    <NumberFieldIncrement class="p-2" data-testid="increment">
      <Icon icon="radix-icons:plus" />
    </NumberFieldIncrement>
  </NumberFieldRoot>
</template>
