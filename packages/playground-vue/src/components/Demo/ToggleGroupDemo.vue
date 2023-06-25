<script setup lang="ts">
import { ToggleGroupRoot, ToggleGroupItem } from "radix-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const toggleStateSingle = ref("1");
const toggleStateMultiple = ref(["1"]);

const toggleGroupItemClasses =
  "hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";
</script>

<template>
  <p>Single: {{ toggleStateSingle }}</p>
  <ToggleGroupRoot class="flex" v-model="toggleStateSingle">
    <ToggleGroupItem value="1" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="lucide:italic" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem value="2" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="lucide:italic" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem value="3" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="lucide:italic" class="text-black" />
    </ToggleGroupItem>
  </ToggleGroupRoot>
  <br />
  <p>Multiple: {{ toggleStateMultiple }}</p>
  <ToggleGroupRoot type="multiple" class="flex" v-model="toggleStateMultiple">
    <ToggleGroupItem value="1" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="lucide:italic" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem value="2" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="lucide:italic" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem value="3" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="lucide:italic" class="text-black" />
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>
