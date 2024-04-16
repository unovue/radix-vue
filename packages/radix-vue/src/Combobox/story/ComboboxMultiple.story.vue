<script setup lang="ts">
import { computed, ref } from 'vue'
import { ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxTrigger, ComboboxViewport } from '../'
import { Icon } from '@iconify/vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const searchTerm = ref('')
const v = ref([people[0], people[3]])

const filteredPeople = computed(() => people.filter(i => i.name.toLowerCase().includes(searchTerm.value.toLowerCase())))

function deleteItem(item: object) {
  const index = v.value.findIndex(i => i === item)
  v.value.splice(index, 1)
}

function handleUpdate(ev: any) {
  console.log(ev)
}
</script>

<template>
  <Story title="Combobox/Multiple" :layout="{ type: 'grid', width: '50%' }">
    <Variant title="String" auto-props-disabled>
      <ComboboxRoot multiple>
        <ComboboxAnchor class="min-w-[160px] inline-flex items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none">
          <ComboboxInput class="bg-transparent outline-none text-grass11 placeholder-gray-400" placeholder="Test" />
          <ComboboxTrigger>
            <Icon icon="radix-icons:chevron-down" class="h-4 w-4 text-grass11" />
          </ComboboxTrigger>
        </ComboboxAnchor>
        <ComboboxContent class="mt-2 min-w-[160px] bg-white overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
          <ComboboxViewport class="p-[5px]">
            <ComboboxEmpty class="text-gray-400  text-xs font-medium text-center py-2" />

            <ComboboxGroup>
              <ComboboxLabel class="px-[25px] text-xs leading-[25px] text-mauve11">
                People
              </ComboboxLabel>

              <ComboboxItem
                v-for="option in filteredPeople.map(i => i.name)" :key="option"
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

    <Variant title="Object" auto-props-disabled>
      <ComboboxRoot v-model:search-term="searchTerm" v-model="v" name="test" multiple @update:model-value="handleUpdate">
        <ComboboxAnchor class="min-w-[160px] inline-flex items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none">
          <ComboboxInput class="bg-transparent outline-none text-grass11 placeholder-gray-400" placeholder="Test" />
          <ComboboxTrigger>
            <Icon icon="radix-icons:chevron-down" class="h-4 w-4 text-grass11" />
          </ComboboxTrigger>
        </ComboboxAnchor>
        <ComboboxContent class="mt-2 min-w-[160px] bg-white overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
          <ComboboxViewport class="p-[5px]">
            <ComboboxEmpty class="text-gray-400  text-xs font-medium text-center py-2" />

            <ComboboxGroup>
              <ComboboxLabel class="px-[25px] text-xs leading-[25px] text-mauve11">
                People
              </ComboboxLabel>

              <ComboboxItem
                v-for="option in filteredPeople" :key="option.id"
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1"
                :value="option"
              >
                <ComboboxItemIndicator
                  class="absolute left-0 w-[25px] inline-flex items-center justify-center"
                >
                  <Icon icon="radix-icons:check" />
                </ComboboxItemIndicator>
                <span>
                  {{ option.name }}
                </span>
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxRoot>
    </Variant>

    <Variant title="multiple-object" auto-props-disabled>
      <ComboboxRoot v-model:search-term="searchTerm" v-model="v" name="test" multiple @update:model-value="handleUpdate">
        <ComboboxAnchor class="min-w-[160px] inline-flex items-center justify-between rounded px-[15px] text-[13px] leading-none min-h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none">
          <div class="flex flex-col">
            <div v-if="v.length" class="w-full flex flex-row flex-wrap my-2 gap-1">
              <div v-for="(item, index) in v" :key="index" class="bg-white flex flex-row items-center border rounded p-[5px]">
                {{ item.name }}

                <span class="ml-1 bg-slate-100 rounded p-[2px] cursor-pointer" @click="deleteItem(item)">
                  <svg class="w-3 h-3 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#21211D" />
                  </svg>
                </span>
              </div>
            </div>

            <ComboboxInput class="bg-transparent outline-none text-grass11 placeholder-gray-400" :class="{ 'mb-2': v.length }" placeholder="Test" />
          </div>

          <ComboboxTrigger>
            <Icon icon="radix-icons:chevron-down" class="h-4 w-4 text-grass11" />
          </ComboboxTrigger>
        </ComboboxAnchor>

        <ComboboxContent class="mt-2 min-w-[160px] bg-white overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
          <ComboboxViewport class="p-[5px]">
            <ComboboxEmpty class="text-gray-400  text-xs font-medium text-center py-2" />

            <ComboboxGroup>
              <ComboboxLabel class="px-[25px] text-xs leading-[25px] text-mauve11">
                People
              </ComboboxLabel>

              <ComboboxItem
                v-for="option in filteredPeople" :key="option.id"
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1"
                :value="option"
              >
                <ComboboxItemIndicator
                  class="absolute left-0 w-[25px] inline-flex items-center justify-center"
                >
                  <Icon icon="radix-icons:check" />
                </ComboboxItemIndicator>
                <span>
                  {{ option.name }}
                </span>
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxRoot>
    </Variant>
  </Story>
</template>
