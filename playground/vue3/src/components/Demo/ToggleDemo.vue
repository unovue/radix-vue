<script setup lang="ts">
import { Toggle } from "radix-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const toggleState = ref(true);
</script>

<template>
   <div class="absolute left-4 top-3 text-sm">
    <p>Value: {{ toggleState ? "checked" : "unchecked" }}</p>
    <button
      @click="toggleState = !toggleState"
      class="bg-white/20 px-2 py-1 rounded-md active:scale-90 duration-100 transform hover:bg-white/40 active:bg-white/20"
    >
      {{toggleState ? 'Unpress' : 'Press'}}
    </button>
  </div>
  <Toggle aria-label="Toggle italic"
    class="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA7 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus-within:shadow-[0_0_0_2px] focus-within:shadow-black">
    <Icon icon="radix-icons:font-italic" class="text-black"/>
  </Toggle>
</template>
