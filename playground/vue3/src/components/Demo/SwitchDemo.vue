<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from "radix-vue";
import { ref } from "vue";

const switchState = ref(true);
</script>

<template>
  <div class="absolute left-4 top-3 text-sm">
  <p>Value: {{ switchState ? "checked" : "unchecked" }}</p>
  <button @click="switchState = !switchState" class="bg-white/20 px-2 py-1 rounded-md active:scale-90 duration-100 transform hover:bg-white/40 active:bg-white/20">Toggle</button>
</div>
  <div class="flex gap-2 items-center">
    <label className="text-white text-[15px] leading-none pr-[15px]" for="airplane-mode">
      Airplane mode
    </label>
    <SwitchRoot
      class="w-[42px] h-[25px] focus-within:outline focus-within:outline-black flex bg-black/50 shadow-sm rounded-full relative data-[state=checked]:bg-black cursor-default"
      id="airplane-mode"
    >
      <SwitchThumb
        class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
      />
    </SwitchRoot>
  </div>
</template>
