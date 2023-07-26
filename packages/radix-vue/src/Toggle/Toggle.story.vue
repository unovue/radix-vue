<script setup lang="ts">
import { Toggle } from "./";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const toggleState = ref(true);
</script>
<template>
  <Story title="Toggle" :layout="{ type: 'grid', width: '50%' }">
    <Variant title="default">
      <Toggle
        v-model:pressed="toggleState"
        aria-label="Toggle italic"
        class="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA7 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus-within:shadow-[0_0_0_2px] focus-within:shadow-black"
      >
        <Icon icon="radix-icons:font-italic" class="text-black" />
      </Toggle>
    </Variant>
  </Story>
</template>
