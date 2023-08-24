<script setup lang="ts">
import { Icon } from '@iconify/vue'

const fruits = ref(['Apple'])

function handleClick() {
  alert('hello!')
}

const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']

function removeFruit(fruit: string) {
  fruits.value = fruits.value.filter(i => i !== fruit)
}
</script>

<template>
  <div class="absolute left-4 top-3 text-sm">
    <p>Person: {{ fruits }}</p>
  </div>
  <SelectRoot v-model="fruits" multiple>
    <SelectTrigger
      class="w-[280px] inline-flex items-center justify-between rounded px-[15px] py-2 text-[13px] leading-none gap-2 bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
      aria-label="Customise options"
    >
      <div class="flex gap-1 flex-wrap">
        <div
          v-for="(fruit, index) in fruits"
          :key="index"
          class="px-2 py-1.5 rounded bg-green-300 flex gap-2 items-center text-xs"
        >
          {{ fruit }}
          <Icon icon="lucide:x" class="h-3 w-3" @click.stop.prevent="removeFruit(fruit)" />
        </div>
      </div>

      <Icon icon="radix-icons:chevron-down" class="h-4 w-4 flex-none" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="w-[280px] bg-white rounded p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
        <SelectLabel class="px-[25px] text-xs leading-[25px] text-mauve11">
          Fruits
        </SelectLabel>
        <SelectGroup>
          <SelectItem
            v-for="(option, index) in options"
            :key="index"
            class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            :value="option"
          >
            <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <Icon icon="radix-icons:check" />
            </SelectItemIndicator>
            {{ option }}
          </SelectItem>
        </SelectGroup>
        <SelectSeparator class="h-[1px] bg-violet6 m-[5px]" />
        <SelectLabel class="px-[25px] text-xs leading-[25px] text-mauve11">
          Vegetables
        </SelectLabel>
        <SelectGroup>
          <SelectItem
            v-for="(option, index) in vegetables"
            :key="index"
            class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            :value="option"
            :disabled="option === 'Courgette'"
          >
            <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <Icon icon="radix-icons:check" />
            </SelectItemIndicator>
            {{ option }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
