<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { StepperDescription, StepperIndicator, StepperItem, StepperList, StepperRoot, StepperSeparator, StepperTitle, StepperTrigger } from 'radix-vue'

const steps = [{
  step: 1,
  title: 'Address',
  description: 'Add your address here',
  icon: 'radix-icons:home',
}, {
  step: 2,
  title: 'Shipping',
  description: 'Set your preferred shipping method',
  icon: 'radix-icons:archive',
}, {
  step: 3,
  title: 'Trade-in',
  description: 'Add any trade-in items you have',
  icon: 'radix-icons:update',
}, {
  step: 4,
  title: 'Payment',
  description: 'Add any payment information you have',
  icon: 'radix-icons:sketch-logo',
}, {
  step: 5,
  title: 'Checkout',
  description: 'Confirm your order',
  icon: 'radix-icons:check',
}]
</script>

<template>
  <StepperRoot :default-value="2">
    <StepperList class="flex gap-2">
      <StepperItem
        v-for="item in steps"
        :key="item.step"
        class="flex items-center gap-2 cursor-pointer group data-[disabled]:pointer-events-none"
        :step="item.step"
        aria-describedby="undefined"
      >
        <StepperTrigger class="flex flex-col items-center text-center gap-2">
          <StepperIndicator
            class="inline-flex items-center group-data-[disabled]:text-gray-400 group-data-[state=active]:bg-black group-data-[state=active]:text-white justify-center rounded-full text-grass11 w-10 h-10 shrink-0 bg-white group-data-[state=active]:shadow-black group-data-[state=completed]:bg-violet9 group-data-[state=completed]:text-white group-data-[state=completed]:shadow-violet9 shadow-[0_0_0_2px] "
          >
            <Icon
              :icon="item.icon"
              class="w-6 h-6"
            />
          </StepperIndicator>
          <div class="flex flex-col">
            <StepperTitle class="text-xs text-black font-medium">
              {{ item.title }}
            </StepperTitle>
            <StepperDescription class="text-xs text-black">
              {{ item.description }}
            </StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator
          v-if="item.step !== steps[steps.length - 1].step"
          class="w-[20px] h-[1px] group-data-[state=active]:bg-black group-data-[disabled]:bg-gray-300 group-data-[state=completed]:bg-violet9 bg-green5 shrink-0"
        />
      </StepperItem>
    </StepperList>
  </StepperRoot>
</template>
