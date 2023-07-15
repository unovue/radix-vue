<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupRoot } from '../../../../../packages/radix-vue/src'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const toggleStateSingle = ref('left')
const toggleStateMultiple = ref(['italic'])

const toggleGroupItemClasses
  = 'hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none'
</script>

<template>
  <div class="absolute left-4 top-3 text-sm">
    <p>Single: {{ toggleStateSingle }}</p>
    <p>Multiple: {{ toggleStateMultiple }}</p>
  </div>
  <ToggleGroupRoot v-model="toggleStateSingle" class="flex">
    <ToggleGroupItem value="left" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="radix-icons:text-align-left" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="radix-icons:text-align-center" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="radix-icons:text-align-right" class="text-black" />
    </ToggleGroupItem>
  </ToggleGroupRoot>
  <br>
  <ToggleGroupRoot v-model="toggleStateMultiple" type="multiple" class="flex">
    <ToggleGroupItem disabled value="bold" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="radix-icons:font-bold" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="radix-icons:font-italic" class="text-black" />
    </ToggleGroupItem>
    <ToggleGroupItem value="strikethrough" aria-label="Toggle italic" :class="toggleGroupItemClasses">
      <Icon icon="radix-icons:strikethrough" class="text-black" />
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>
