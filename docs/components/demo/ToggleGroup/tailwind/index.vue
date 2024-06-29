<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const toggleStateSingle = ref('left')
const toggleStateMultiple = ref(['italic'])

const toggleGroupItemClasses
  = 'hover:bg-green3 text-mauve11 data-[state=on]:bg-green6 data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none'
</script>

<template>
  <div>
    <ToggleGroupRoot
      v-model="toggleStateSingle"
      type="single"
      class="flex"
    >
      <ToggleGroupItem
        value="left"
        aria-label="Toggle italic"
        :class="toggleGroupItemClasses"
      >
        <Icon
          icon="radix-icons:text-align-left"
          class="w-[15px] h-[15px]"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="center"
        aria-label="Toggle italic"
        :class="toggleGroupItemClasses"
      >
        <Icon
          icon="radix-icons:text-align-center"
          class="w-[15px] h-[15px]"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="right"
        aria-label="Toggle italic"
        :class="toggleGroupItemClasses"
      >
        <Icon
          icon="radix-icons:text-align-right"
          class="w-[15px] h-[15px]"
        />
      </ToggleGroupItem>
    </ToggleGroupRoot>
    <br>
    <ToggleGroupRoot
      v-model="toggleStateMultiple"
      type="multiple"
      class="flex"
    >
      <ToggleGroupItem
        value="bold"
        aria-label="Toggle italic"
        :class="toggleGroupItemClasses"
      >
        <Icon
          icon="radix-icons:font-bold"
          class="w-[15px] h-[15px]"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        aria-label="Toggle italic"
        :class="toggleGroupItemClasses"
      >
        <Icon
          icon="radix-icons:font-italic"
          class="w-[15px] h-[15px]"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="strikethrough"
        aria-label="Toggle italic"
        :class="toggleGroupItemClasses"
      >
        <Icon
          icon="radix-icons:strikethrough"
          class="w-[15px] h-[15px]"
        />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  </div>
</template>
