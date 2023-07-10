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

const toggleState = ref(false);
const checkboxOne = ref(false);
const checkboxTwo = ref(false);
const person = ref("pedro");
const toggleStateSub = ref(false);

function handleClick() {
  alert("hello!");
}
</script>

<template>
  <div class="absolute left-4 top-3 text-sm">
    <p>Dropdown Open: {{ toggleState ? "open" : "close" }}</p>
    <p>Checkbox 1: {{ checkboxOne ? "checked" : "unchecked" }}</p>
    <p>Checkbox 2: {{ checkboxTwo ? "checked" : "unchecked" }}</p>
    <p>Person: {{ person }}</p>
    <button
      @click="toggleState = !toggleState"
      class="bg-white/20 px-2 py-1 rounded-md active:scale-90 duration-100 transform hover:bg-white/40 active:bg-white/20"
    >
      {{ toggleState ? "Close" : "Open" }}
    </button>
  </div>
  <SelectRoot v-model="toggleState">
    <SelectTrigger
      class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Customise options"
    >
      <Icon icon="radix-icons:hamburger-menu" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :sideOffset="5"
      >
        <SelectSeparator class="h-[1px] bg-violet6 m-[5px]" />
        <SelectCheckboxItem
          v-model="checkboxOne"
          class="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
        >
          <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
            <Icon icon="radix-icons:check" />
          </SelectItemIndicator>
          Show Bookmarks
          <div
            class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
          >
            ⌘+B
          </div>
        </SelectCheckboxItem>
        <SelectCheckboxItem
          v-model="checkboxTwo"
          class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
        >
          <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
            <Icon icon="radix-icons:check" />
          </SelectItemIndicator>
          Show Full URLs
        </SelectCheckboxItem>
        <SelectSeparator class="h-[1px] bg-violet6 m-[5px]" />

        <SelectLabel class="pl-[25px] text-xs leading-[25px] text-mauve11"> People </SelectLabel>
        <SelectRadioGroup v-model="person">
          <SelectRadioItem
            class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            value="pedro"
          >
            <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <Icon icon="radix-icons:check" />
            </SelectItemIndicator>
            Pedro Duarte
          </SelectRadioItem>
          <SelectRadioItem
            class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            value="colm"
          >
            <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <Icon icon="radix-icons:check" />
            </SelectItemIndicator>
            Colm Tuite
          </SelectRadioItem>
        </SelectRadioGroup>
        <SelectArrow class="fill-white" />
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
