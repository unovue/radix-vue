<script setup lang="ts">
import { Label } from 'radix-vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-[15px] px-5">
    <Label
      class="text-[15px] font-semibold leading-[35px] text-white"
      for="firstName"
    > First name </Label>
    <input
      id="firstName"
      class="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
      type="text"
      value="Pedro Duarte"
    >
  </div>
</template>
