<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { Toggle } from "./";

const toggleState = ref<boolean>(false);
const toggleStateDefaultOn = ref<boolean>();
</script>

<template>
  <Story title="Toggle" :layout="{ type: 'single', iframe: true }">
    <Variant title="default">
      <Toggle
        v-model="toggleState"
        aria-label="Toggle bold"
        class="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA7 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus-within:shadow-[0_0_0_2px] focus-within:shadow-black"
      >
        <Icon icon="radix-icons:font-bold" class="text-black" />
      </Toggle>
    </Variant>
    <Variant title="toggled by default">
      <Toggle
        aria-label="Toggle bold"
        :default-value="true"
        v-model="toggleStateDefaultOn"
        class="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA7 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus-within:shadow-[0_0_0_2px] focus-within:shadow-black"
      >
        <Icon icon="radix-icons:font-bold" class="text-black" />
      </Toggle>
    </Variant>
    <Variant title="onPressedChange Event">
      <Toggle
        aria-label="Toggle bold"
        :default-value="true"
        v-model="toggleStateDefaultOn"
        @
        class="hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 shadow-blackA7 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus-within:shadow-[0_0_0_2px] focus-within:shadow-black"
      >
        <Icon icon="radix-icons:font-bold" class="text-black" />
      </Toggle>
    </Variant>
  </Story>
</template>
