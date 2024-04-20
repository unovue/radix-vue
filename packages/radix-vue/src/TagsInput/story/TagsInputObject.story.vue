<script setup lang="ts">
import { ref } from 'vue'
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from '..'
import { Icon } from '@iconify/vue'

let id = 1
type Item = { id: number; label: string }
const modelValue = ref<Item[]>([{ id, label: 'Test' }])
function convertValue(label: string) {
  id++
  return { id, label } satisfies Item
}
function displayValue(item: Item) {
  return item.label
}
</script>

<template>
  <Story title="TagsInput/Object" :layout="{ type: 'single', iframe: false }">
    <Variant title="default">
      {{ JSON.stringify(modelValue) }}
      <TagsInputRoot
        v-model="modelValue"
        :convert-value="convertValue"
        :display-value="displayValue"
        class="flex gap-2 items-center border p-2 rounded-lg bg-blackA7 w-[300px] flex-wrap border-blackA7 mt-6"
      >
        <TagsInputItem
          v-for="item in modelValue" :key="item.id" :value="item"
          class=" data-[disabled]:opacity-50 flex items-center justify-center gap-2 bg-green8 aria-[current=true]:bg-green9 rounded px-2 py-1"
        >
          <TagsInputItemText class="text-sm" />
          <TagsInputItemDelete>
            <Icon icon="lucide:x" />
          </TagsInputItemDelete>
        </TagsInputItem>

        <TagsInputInput placeholder="Anything..." class="focus:outline-none flex-1 rounded bg-transparent text-white placeholder:text-mauve10 px-1" />
      </TagsInputRoot>
    </Variant>
  </Story>
</template>
