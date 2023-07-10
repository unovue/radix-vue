<script setup lang="ts">
import {
  SelectArrow,
  SelectContent,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectCheckboxItem,
  SelectItemIndicator,
  SelectLabel,
  SelectRadioGroup,
  SelectRadioItem,
} from "../../../../../packages/radix-vue/src";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const fruit = ref("Apple");

function handleClick() {
  alert("hello!");
}

const options = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]
</script>

<template>
  <div class="absolute left-4 top-3 text-sm">
    <p>Person: {{ fruit }}</p>
  </div>
  <SelectRoot v-model="fruit">
    <SelectTrigger
      class="text-sm w-[180px] rounded-md px-3 h-10 flex items-center justify-between text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Customise options"
    >
      {{ fruit }}
      <Icon icon="radix-icons:chevron-down" class="h-4 w-4" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="w-[180px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :sideOffset="5"
      >

        <SelectLabel class="pl-[25px] text-sm leading-[25px] text-mauve11"> Fruits </SelectLabel>
        <SelectRadioGroup>
          <SelectRadioItem
            v-for="option in options"
            class="text-sm leading-none text-violet11 rounded-[3px] flex items-center h-8 px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            :value="option"
          >
            <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <Icon icon="radix-icons:check" />
            </SelectItemIndicator>
            {{option}}
          </SelectRadioItem>
        </SelectRadioGroup>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
