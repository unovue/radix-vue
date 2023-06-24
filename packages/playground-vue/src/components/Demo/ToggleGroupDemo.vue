<script setup lang="ts">
import { ToggleGroupRoot, ToggleGroupItem } from "radix-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const toggleState = ref(true);
const toggleState2 = ref(true);
const toggleState3 = ref(true);
</script>

<template>
  <p>{{ toggleState ? "checked" : "uncheked" }}</p>
  <ToggleGroupRoot class="flex">
    <ToggleGroupItem v-model="toggleState" aria-label="Toggle italic"
      class="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA7 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus-within:shadow-[0_0_0_2px] focus-within:shadow-black">
      <Icon icon="lucide:italic" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem v-model="toggleState2" aria-label="Toggle italic"
      class="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA7 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus-within:shadow-[0_0_0_2px] focus-within:shadow-black">
      <Icon icon="lucide:italic" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem v-model="toggleState3" aria-label="Toggle italic"
      class="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA7 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus-within:shadow-[0_0_0_2px] focus-within:shadow-black">
      <Icon icon="lucide:italic" class="text-black" />
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>
