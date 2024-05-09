<script setup lang="ts">
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot } from '../'
import { Icon } from '@iconify/vue'
</script>

<template>
  <Story title="NumberField/Basic" :layout="{ type: 'single', iframe: true }">
    <Variant title="default">
      <NumberFieldRoot
        class="text-sm flex items-center border bg-blackA7 border-blackA9 rounded-md text-white" :format-options="{
          style: 'currency',
          currency: 'USD',
          currencyDisplay: 'code',
          currencySign: 'accounting',
        }"
        :min="0"
        :max="10"
      >
        <NumberFieldDecrement class="p-2">
          <Icon icon="radix-icons:minus" />
        </NumberFieldDecrement>
        <NumberFieldInput class="bg-transparent w-32 tabular-nums focus:outline-0 p-1" />
        <NumberFieldIncrement class="p-2">
          <Icon icon="radix-icons:plus" />
        </NumberFieldIncrement>
      </NumberFieldRoot>
    </Variant>
  </Story>
</template>
