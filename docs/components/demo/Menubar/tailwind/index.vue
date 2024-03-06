<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from 'radix-vue'

const currentMenu = ref('')
const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const person = ref('pedro')
function handleClick() {
  alert('hello!')
}

const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis']
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs']
</script>

<template>
  <MenubarRoot v-model="currentMenu" class="flex bg-white p-[3px] rounded-md shadow-[0_2px_10px] shadow-blackA7">
    <MenubarMenu value="file">
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4"
      >
        File
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          :side-offset="5"
          :align-offset="-3"
        >
          <MenubarItem
            class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            New Tab
            <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘ T
            </div>
          </MenubarItem>
          <MenubarItem
            class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            New Window
            <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘ N
            </div>
          </MenubarItem>
          <MenubarItem
            class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            disabled
          >
            New Incognito Window
          </MenubarItem>
          <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
          <MenubarSub>
            <MenubarSubTrigger
              class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
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
                class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                :align-offset="-5"
              >
                <MenubarItem
                  class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Email Link
                </MenubarItem>
                <MenubarItem
                  class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Messages
                </MenubarItem>
                <MenubarItem
                  class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Notes
                </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
          <MenubarItem
            class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Print…
            <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘ P
            </div>
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu value="Edit">
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4"
      >
        Edit
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          :side-offset="5"
          :align-offset="-3"
        >
          <MenubarItem
            class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Undo
            <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘ Z
            </div>
          </MenubarItem>
          <MenubarItem
            class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Redo
            <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⇧ ⌘ Z
            </div>
          </MenubarItem>
          <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
          <MenubarSub>
            <MenubarSubTrigger
              class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
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
                class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                :align-offset="-5"
              >
                <MenubarItem
                  class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Search the web…
                </MenubarItem>
                <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                <MenubarItem
                  class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Find…
                </MenubarItem>
                <MenubarItem
                  class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Find Next
                </MenubarItem>
                <MenubarItem
                  class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                >
                  Find Previous
                </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
          <MenubarItem
            class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Cut
          </MenubarItem>
          <MenubarItem
            class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Copy
          </MenubarItem>
          <MenubarItem
            class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Paste
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu value="View">
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4"
      >
        View
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          :side-offset="5"
          :align-offset="-14"
        >
          <MenubarCheckboxItem
            v-model="checkboxOne"
            class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
          >
            <MenubarItemIndicator class="absolute left-0 w-[20px] inline-flex items-center justify-center">
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
            class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
          >
            <MenubarItemIndicator class="absolute left-0 w-[20px] inline-flex items-center justify-center">
              <Icon icon="radix-icons:check" />
            </MenubarItemIndicator>
            Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
          <MenubarItem
            class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Reload
            <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘ R
            </div>
          </MenubarItem>
          <MenubarItem
            class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            disabled
          >
            Force Reload
            <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⇧ ⌘ R
            </div>
          </MenubarItem>
          <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
          <MenubarItem
            class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Toggle Fullscreen
          </MenubarItem>
          <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
          <MenubarItem
            class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Hide Sidebar
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu value="Profiles">
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4"
      >
        Profiles
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          :side-offset="5"
          :align-offset="-14"
        >
          <MenubarRadioGroup v-model="person">
            <MenubarRadioItem
              class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              value="pedro"
            >
              <MenubarItemIndicator class="absolute left-0 w-[20px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:dot-filled" />
              </MenubarItemIndicator>
              Pedro Duarte
            </MenubarRadioItem>
            <MenubarRadioItem
              class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              value="colm"
            >
              <MenubarItemIndicator class="absolute left-0 w-[20px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:dot-filled" />
              </MenubarItemIndicator>
              Colm Tuite
            </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
          <MenubarItem
            class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            @click="handleClick"
          >
            Edit…
          </MenubarItem>
          <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
          <MenubarItem
            class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
          >
            Add Profile…
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
