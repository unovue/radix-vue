<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { CheckboxIndicator, CheckboxRoot } from '../'

const checkboxOne = ref(false)
</script>

<template>
  <label
    class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100"
    for="test"
  >
    Test
  </label>
  <CheckboxRoot
    v-model:checked="checkboxOne"
    name="test"
    class="shadow-blackA7 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]"
    aria-label="Test"
  >
    <CheckboxIndicator
      class="bg-white h-full w-full rounded flex items-center justify-center"
    >
      <Icon icon="radix-icons:check" class="h-3 w-3 text-black" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
