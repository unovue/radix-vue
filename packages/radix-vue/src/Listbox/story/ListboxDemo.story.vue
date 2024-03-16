<script setup lang="ts">
import { ListboxItem, ListboxRoot } from '../'
</script>

<template>
  <Story
    title="Listbox/Demo"
    :layout="{ type: 'grid', iframe: false, width: '50%' }"
  >
    <Variant title="default">
      <ListboxRoot class="w-48 flex flex-col p-1 rounded-lg border bg-white text-green9 mx-auto">
        <ListboxItem v-for="i in 10" :key="i" :value="i" class="w-full py-1 px-2 text-green9 select-none text-sm focus:ring-0 focus:outline-green9 data-[state=checked]:bg-green9 data-[state=checked]:text-white rounded">
          Item {{ i }}
        </ListboxItem>
      </ListboxRoot>
    </Variant>

    <Variant title="multiple">
      <ListboxRoot :multiple="true" class="w-48 flex flex-col p-1 rounded-lg border bg-white text-green9 mx-auto">
        <ListboxItem v-for="i in 10" :key="i" :value="i" class="w-full py-1 px-2 text-green9 select-none text-sm focus:ring-0 focus:outline-green9 data-[state=checked]:bg-green9 data-[state=checked]:text-white rounded">
          Item {{ i }}
        </ListboxItem>
      </ListboxRoot>
    </Variant>

    <Variant title="replace behavior">
      <ListboxRoot selection-behavior="replace" class="w-48 flex flex-col p-1 rounded-lg border bg-white text-green9 mx-auto">
        <ListboxItem v-for="i in 10" :key="i" :value="i" class="w-full py-1 px-2 text-green9 select-none text-sm focus:ring-0 focus:outline-green9 data-[state=checked]:bg-green9 data-[state=checked]:text-white rounded">
          Item {{ i }}
        </ListboxItem>
      </ListboxRoot>
    </Variant>
  </Story>
</template>
