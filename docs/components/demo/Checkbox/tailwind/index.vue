<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'

const checkboxOne = ref(true)
</script>

<template>
  <div class="flex flex-col gap-2.5">
    <label class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100">
      <CheckboxRoot
        v-model:checked="checkboxOne"
        class="shadow-blackA7 hover:bg-green3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]"
      >
        <CheckboxIndicator class="bg-white h-full w-full rounded flex items-center justify-center">
          <Icon icon="radix-icons:check" class="h-3.5 w-3.5 text-grass11" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none text-white">Accept terms and conditions.</span>
    </label>
  </div>
</template>
