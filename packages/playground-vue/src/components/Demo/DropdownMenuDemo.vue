<script setup lang="ts">
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from "radix-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const toggleState = ref(false);
const toggleItem = ref("New Tab");
</script>

<template>
  <div class="absolute left-4 top-3 text-sm">
    <p>{{ toggleState ? "checked" : "uncheked" }}</p>
    <p>{{ toggleItem }}</p>
  </div>
  <DropdownMenuRoot v-model="toggleState">
    <DropdownMenuTrigger asChild>
      <button
        class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        aria-label="Customise options">
        <Icon icon="radix-icons:hamburger-menu" />
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}>
        <DropdownMenuGroup v-model="toggleItem" type="single" class="content">
          <DropdownMenuItem value="New Tab"
            class="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            New Tab
            <div
              class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+T
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value="New Window"
            class="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            New Window
            <div
              class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+N
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value="New Private Window"
            class="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            disabled>
            New Private Window
            <div
              class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⇧+⌘+N
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator class="h-[1px] bg-violet6 m-[5px]" />
        <!--
          <DropdownMenuCheckboxItem
            class="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenuItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Bookmarks{' '}
            <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+B
            </div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenuItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator class="h-[1px] bg-violet6 m-[5px]" />

          <DropdownMenuLabel class="pl-[25px] text-xs leading-[25px] text-mauve11">
            People
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem
              class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              value="pedro"
            >
              <DropdownMenuItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Pedro Duarte
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              value="colm"
            >
              <DropdownMenuItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          -->
        <DropdownMenuArrow class="fill-white" />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
