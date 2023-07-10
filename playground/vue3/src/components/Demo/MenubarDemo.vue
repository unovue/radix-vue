<script setup lang="ts">
import {
  MenubarContent,
  MenubarItem,
  MenubarPortal,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
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

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];
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
  <MenubarRoot
    class="flex bg-white p-[3px] rounded-md shadow-[0_2px_10px] shadow-blackA7"
  >
    <MenubarMenu>
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4"
      >
        File
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          :sideOffset="5"
          :alignOffset="-3"
        >
          <MenubarItem
            class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            New Tab
            <div
              class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              ⌘ T
            </div>
          </MenubarItem>
          <MenubarItem
            class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            New Window
            <div
              class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              ⌘ N
            </div>
          </MenubarItem>
          <MenubarItem
            class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            disabled
          >
            New Incognito Window
          </MenubarItem>
          <MenubarSeparator class="h-[1px] bg-violet6 m-[5px]" />
          <MenubarSub>
            <MenubarSubTrigger
              class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Share
              <div
                class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
              >
                <Icon icon="radix-icons:chevron-right" />
              </div>
            </MenubarSubTrigger>
            <MenubarPortal>
              <MenubarSubContent
                class="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                alignOffset="{-5}"
              >
                <MenubarItem
                  class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Email Link
                </MenubarItem>
                <MenubarItem
                  class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Messages
                </MenubarItem>
                <MenubarItem
                  class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Notes
                </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="h-[1px] bg-violet6 m-[5px]" />
          <MenubarItem
            class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Print…
            <div
              class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              ⌘ P
            </div>
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4"
      >
        Edit
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          sideOffset="{5}"
          alignOffset="{-3}"
        >
          <MenubarItem
            class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Undo
            <div
              class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              ⌘ Z
            </div>
          </MenubarItem>
          <MenubarItem
            class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Redo
            <div
              class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              ⇧ ⌘ Z
            </div>
          </MenubarItem>
          <MenubarSeparator class="h-[1px] bg-violet6 m-[5px]" />
          <MenubarSub>
            <MenubarSubTrigger
              class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Find
              <div
                class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
              >
                <Icon icon="radix-icons:chevron-right" />
              </div>
            </MenubarSubTrigger>

            <MenubarPortal>
              <MenubarSubContent
                class="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                alignOffset="{-5}"
              >
                <MenubarItem
                  class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Search the web…
                </MenubarItem>
                <MenubarSeparator class="h-[1px] bg-violet6 m-[5px]" />
                <MenubarItem
                  class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Find…
                </MenubarItem>
                <MenubarItem
                  class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Find Next
                </MenubarItem>
                <MenubarItem
                  class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Find Previous
                </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="h-[1px] bg-violet6 m-[5px]" />
          <MenubarItem
            class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Cut
          </MenubarItem>
          <MenubarItem
            class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Copy
          </MenubarItem>
          <MenubarItem
            class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Paste
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4"
      >
        View
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          sideOffset="{5}"
          alignOffset="{-14}"
        >
          <MenubarCheckboxItem
            v-model="checkboxOne"
            class="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
          >
            <MenubarItemIndicator
              class="absolute left-0 w-[25px] inline-flex items-center justify-center"
            >
              <Icon icon="radix-icons:check" />
            </MenubarItemIndicator>
            Show Bookmarks
            <div
              class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              ⌘+B
            </div>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            v-model="checkboxTwo"
            class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
          >
            <MenubarItemIndicator
              class="absolute left-0 w-[25px] inline-flex items-center justify-center"
            >
              <Icon icon="radix-icons:check" />
            </MenubarItemIndicator>
            Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator class="h-[1px] bg-violet6 m-[5px]" />
          <MenubarItem
            class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Reload
            <div
              class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              ⌘ R
            </div>
          </MenubarItem>
          <MenubarItem
            class="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            disabled
          >
            Force Reload
            <div
              class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              ⇧ ⌘ R
            </div>
          </MenubarItem>
          <MenubarSeparator class="h-[1px] bg-violet6 m-[5px]" />
          <MenubarItem
            class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Toggle Fullscreen
          </MenubarItem>
          <MenubarSeparator class="h-[1px] bg-violet6 m-[5px]" />
          <MenubarItem
            class="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Hide Sidebar
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4"
      >
        Profiles
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          :sideOffset="5"
          :alignOffset="-14"
        >
          <MenubarRadioGroup v-model="person">
            <MenubarRadioItem
              class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              value="pedro"
            >
              <MenubarItemIndicator
                class="absolute left-0 w-[25px] inline-flex items-center justify-center"
              >
                <Icon icon="radix-icons:dot-filled" />
              </MenubarItemIndicator>
              Pedro Duarte
            </MenubarRadioItem>
            <MenubarRadioItem
              class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              value="colm"
            >
              <MenubarItemIndicator
                class="absolute left-0 w-[25px] inline-flex items-center justify-center"
              >
                <Icon icon="radix-icons:dot-filled" />
              </MenubarItemIndicator>
              Colm Tuite
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
