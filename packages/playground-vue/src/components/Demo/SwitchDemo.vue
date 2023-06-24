<script setup>
import { SwitchRoot, SwitchThumb } from "radix-vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex gap-2 items-center">
    <label className="text-white text-[15px] leading-none pr-[15px]" for="airplane-mode">
      Airplane mode
    </label>
    <SwitchRoot
      class="w-[42px] h-[25px] flex bg-black/50 shadow-sm rounded-full relative data-[state=checked]:bg-black outline-none cursor-default"
      id="airplane-mode"
    >
      <SwitchThumb
        class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
      />
    </SwitchRoot>
  </div>
</template>
