<script setup>
import { CheckboxRoot, CheckboxIndicator } from "radix-vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex flex-col gap-2.5">
    <label class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100">
      <CheckboxRoot
        class="bg-white shadow h-6 aspect-square rounded flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-[#00000066]"
      >
        <CheckboxIndicator
          class="bg-white h-full w-full rounded flex items-center justify-center"
        >
          <Icon icon="lucide:check" class="h-3 w-3 text-black" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Checkbox</span>
    </label>
    <label class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100">
      <CheckboxRoot
        disabled
        class="bg-white shadow h-6 aspect-square rounded flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-[#00000066]"
      >
        <CheckboxIndicator
          class="bg-white h-full w-full rounded flex items-center justify-center"
        >
          <Icon icon="lucide:check" class="h-3 w-3 text-black" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Disabled Checkbox</span>
    </label>
    <label class="flex flex-row gap-4 items-center [&>.checkbox]:hover:bg-neutral-100">
      <CheckboxRoot
        required
        class="bg-white shadow h-6 aspect-square rounded flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-[#00000066]"
      >
        <CheckboxIndicator
          class="bg-white h-full w-full rounded flex items-center justify-center"
        >
          <Icon icon="lucide:check" class="h-3 w-3 text-black" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="select-none">Required Checkbox</span>
    </label>
  </div>
</template>
