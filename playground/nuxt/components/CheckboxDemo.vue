<script setup lang="ts">
import { Icon } from '@iconify/vue'

const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const checkboxThree = ref(false)
</script>

<template>
  <div class="absolute left-4 top-3 text-sm">
    <p>
      States: {{ checkboxOne ? "one on" : "one off" }} -
      {{ checkboxTwo ? "two on" : "two off" }} -
      {{ checkboxThree ? "three on" : "three off" }}
    </p>
    <button
      class="bg-white/20 px-2 py-1 rounded-md active:scale-90 duration-100 transform hover:bg-white/40 active:bg-white/20"
      @click="checkboxOne = !checkboxOne"
    >
      {{ checkboxOne ? "Uncheck" : "Check" }} Checkbox 1
    </button>
  </div>
  <div class="flex flex-col gap-2.5">
    <label class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100">
      <CheckboxRoot
        v-model="checkboxOne"
        class="shadow-blackA7 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]"
      >
        <CheckboxIndicator
          class="bg-white h-full w-full rounded flex items-center justify-center"
        >
          <Icon icon="radix-icons:check" class="h-3 w-3 text-black" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Checkbox</span>
    </label>
    <label class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100">
      <CheckboxRoot
        disabled
        class="data-[disabled]:bg-mauve9 bg-white shadow h-6 aspect-square rounded flex items-center justify-center focus-within-within:outline focus-within-within:outline-2 focus-within-within:outline-[#00000066]"
      >
        <CheckboxIndicator
          class="bg-white h-full w-full rounded flex items-center justify-center"
        >
          <Icon icon="radix-icons:check" class="h-3 w-3 text-black" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Disabled Checkbox</span>
    </label>
    <label class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100">
      <CheckboxRoot
        v-model="checkboxThree"
        required
        class="shadow-blackA7 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]"
      >
        <CheckboxIndicator
          class="bg-white h-full w-full rounded flex items-center justify-center"
        >
          <Icon icon="radix-icons:check" class="h-3 w-3 text-black" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Required Checkbox</span>
    </label>
  </div>
</template>
