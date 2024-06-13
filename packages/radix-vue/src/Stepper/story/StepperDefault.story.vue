<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { StepperDescription, StepperIndicator, StepperItem, StepperList, StepperRoot, StepperSeparator, StepperTitle } from '../'
</script>

<template>
  <Story
    title="Stepper/Default"
    :layout="{ type: 'single', iframe: false }"
  >
    <Variant title="default">
      <StepperRoot>
        <StepperList class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <StepperItem
            class="flex items-center gap-2 basis-1/5"
            :step="1"
          >
            <div class="flex flex-col items-center text-center gap-2">
              <StepperIndicator
                class="inline-flex items-center cursor-pointer text-black justify-center rounded-full bg-transparent w-10 h-10 border border-black shrink-0"
              >
                <Icon
                  icon="radix-icons:home"
                  class="w-6 h-6"
                />
              </StepperIndicator>
              <div class="flex flex-col">
                <StepperTitle class="text-md text-black font-medium">
                  Address
                </StepperTitle>
                <StepperDescription class="text-sm text-black">
                  Add your address here
                </StepperDescription>
              </div>
            </div>
            <StepperSeparator class="w-full h-[1px] bg-black" />
          </StepperItem>
          <StepperItem
            class="flex items-center gap-2 basis-1/5"
            :step="2"
          >
            <div class="flex flex-col items-center text-center gap-2">
              <StepperIndicator
                class="inline-flex items-center cursor-pointer text-black justify-center rounded-full bg-transparent w-10 h-10 border border-black shrink-0"
              >
                <Icon
                  icon="radix-icons:archive"
                  class="w-6 h-6"
                />
              </StepperIndicator>
              <div class="flex flex-col">
                <StepperTitle class="text-md text-black font-medium">
                  Shipping
                </StepperTitle>
                <StepperDescription class="text-sm text-black">
                  Set your preferred shipping method
                </StepperDescription>
              </div>
            </div>
            <StepperSeparator class="w-full h-[1px] bg-black" />
          </StepperItem>

          <StepperItem
            class="flex items-center gap-2 basis-1/5"
            :step="3"
          >
            <div class="flex flex-col items-center text-center gap-2">
              <StepperIndicator
                class="inline-flex items-center cursor-pointer text-black justify-center rounded-full bg-transparent w-10 h-10 border border-black shrink-0"
              >
                <Icon
                  icon="radix-icons:update"
                  class="w-6 h-6"
                />
              </StepperIndicator>
              <div class="flex flex-col">
                <StepperTitle class="text-md text-black font-medium">
                  Trade-in
                </StepperTitle>
                <StepperDescription class="text-sm text-black">
                  Add any trade-in items you have
                </StepperDescription>
              </div>
            </div>
            <StepperSeparator class="w-full h-[1px] bg-black" />
          </StepperItem>

          <StepperItem
            class="flex items-center gap-2 basis-1/5"
            :step="4"
          >
            <div class="flex flex-col items-center text-center gap-2">
              <StepperIndicator
                class="inline-flex items-center cursor-pointer text-black justify-center rounded-full bg-transparent w-10 h-10 border border-black shrink-0"
              >
                <Icon
                  icon="radix-icons:sketch-logo"
                  class="w-6 h-6"
                />
              </StepperIndicator>
              <div class="flex flex-col">
                <StepperTitle class="text-md text-black font-medium">
                  Payment
                </StepperTitle>
                <StepperDescription class="text-sm text-black">
                  Add any payment information you have
                </StepperDescription>
              </div>
            </div>
            <StepperSeparator class="w-full h-[1px] bg-black" />
          </StepperItem>

          <StepperItem
            class="flex items-center gap-2 basis-1/5"
            :step="5"
          >
            <div class="flex flex-col items-center text-center gap-2">
              <StepperIndicator
                class="inline-flex items-center cursor-pointer text-black justify-center rounded-full bg-transparent w-10 h-10 border border-black shrink-0"
              >
                <Icon
                  icon="radix-icons:check"
                  class="w-6 h-6"
                />
              </StepperIndicator>
              <div class="flex flex-col">
                <StepperTitle class="text-md text-black font-medium">
                  Checkout
                </StepperTitle>
                <StepperDescription class="text-sm text-black">
                  Confirm your order
                </StepperDescription>
              </div>
            </div>
          </StepperItem>
        </StepperList>
      </StepperRoot>
    </Variant>
  </Story>
</template>
