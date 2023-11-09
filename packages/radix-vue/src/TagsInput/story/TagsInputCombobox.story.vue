<script setup lang="ts">
import { ref } from 'vue'
import { ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxTrigger, ComboboxViewport } from '@/Combobox'
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from '..'
import { Icon } from '@iconify/vue'

const values = ref(['Apple'])
const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
</script>

<template>
  <Story title="TagsInput/Combobox" :layout="{ type: 'single', iframe: false }">
    <Variant title="default">
      <ComboboxRoot v-model="values" multiple>
        <ComboboxAnchor class="max-w-[400px] min-w-[160px] inline-flex items-center justify-between rounded p-2 text-[13px] leading-none  gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none">
          <ComboboxInput as-child>
            <TagsInputRoot
              v-model="values"
              class="flex gap-2 items-center rounded-lg flex-wrap"
            >
              <TagsInputItem v-for="item in values" :key="item" :value="item" class="flex items-center justify-center gap-2 text-white bg-grass10 aria-[selected=true]:bg-grass11 rounded px-2 py-1">
                <TagsInputItemText class="text-sm">
                  {{ item }}
                </TagsInputItemText>
                <TagsInputItemDelete>
                  <Icon icon="lucide:x" />
                </TagsInputItemDelete>
              </TagsInputItem>

              <TagsInputInput placeholder="Anything..." class="focus:outline-none flex-1 rounded bg-transparent  placeholder:text-mauve10 px-1" />
            </TagsInputRoot>
          </ComboboxInput>

          <ComboboxTrigger>
            <Icon icon="radix-icons:chevron-down" class="h-4 w-4 text-grass11" />
          </ComboboxTrigger>
        </ComboboxAnchor>
        <ComboboxContent class="mt-2 min-w-[160px] bg-white overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
          <ComboboxViewport class="p-[5px]">
            <ComboboxEmpty class="text-gray-400  text-xs font-medium text-center py-2" />

            <ComboboxGroup>
              <ComboboxLabel class="px-[25px] text-xs leading-[25px] text-mauve11">
                Fruits
              </ComboboxLabel>

              <ComboboxItem
                v-for="(option, index) in options" :key="index"
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1"
                :value="option"
              >
                <ComboboxItemIndicator
                  class="absolute left-0 w-[25px] inline-flex items-center justify-center"
                >
                  <Icon icon="radix-icons:check" />
                </ComboboxItemIndicator>
                <span>
                  {{ option }}
                </span>
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxRoot>
    </Variant>
  </Story>
</template>
