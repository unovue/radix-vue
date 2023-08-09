<script setup lang="ts">
import { ref } from "vue";
import {
  MenuSeparator,
  MenuItemIndicator,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
} from "..";
import MenuWithAnchor from "./_MenuWithAnchor.vue";
import TickIcon from "./_TickIcon.vue";

const files = ["README.md", "index.js", "page.css"];

const selectedFiles = ref(files[1]);

const handleSelect = (text: string) => {
  console.log({ text });
};
</script>

<template>
  <Story title="Menu/RadioItems" :layout="{ type: 'single', iframe: true }">
    <Variant title="default">
      <MenuWithAnchor>
        <MenuItem
          class="flex items-center justify-between leading-[1] cursor-default select-none whitespace-nowrap h-[25px] px-[10px] text-black rounded-[3px] outline-none data-[highlighted]:bg-black data-[highlighted]:text-white data-[disabled]:text-gray-100"
          @select="handleSelect('minize')"
        >
          Minimize window
        </MenuItem>
        <MenuItem
          class="flex items-center justify-between leading-[1] cursor-default select-none whitespace-nowrap h-[25px] px-[10px] text-black rounded-[3px] outline-none data-[highlighted]:bg-black data-[highlighted]:text-white data-[disabled]:text-gray-100"
          @select="handleSelect('zoom')"
        >
          Zoom
        </MenuItem>
        <MenuItem
          class="flex items-center justify-between leading-[1] cursor-default select-none whitespace-nowrap h-[25px] px-[10px] text-black rounded-[3px] outline-none data-[highlighted]:bg-black data-[highlighted]:text-white data-[disabled]:text-gray-100"
          @select="handleSelect('Smaller')"
        >
          Smaller
        </MenuItem>

        <MenuSeparator
          class="h-[1px] my-[5px] mx-[10px] bg-gray-200"
        ></MenuSeparator>

        <MenuRadioGroup v-model="selectedFiles">
          <MenuRadioItem
            v-for="(file, index) in files"
            :key="index"
            :value="file"
            class="flex items-center justify-between leading-[1] cursor-default select-none whitespace-nowrap h-[25px] px-[10px] text-black rounded-[3px] outline-none data-[highlighted]:bg-black data-[highlighted]:text-white data-[disabled]:text-gray-100"
          >
            {{ file }}
            <MenuItemIndicator>
              <TickIcon></TickIcon>
            </MenuItemIndicator>
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuWithAnchor>
    </Variant>
  </Story>
</template>
