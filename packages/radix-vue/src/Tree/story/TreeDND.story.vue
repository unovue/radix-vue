<script setup lang="ts">
import { TreeRoot } from '..'
import { items as ITEMS } from './constants'
import TreeItem from './_TreeItemDND.vue'
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine'
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { shallowRef, watchEffect } from 'vue'
import { type Instruction, extractInstruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item'
import { updateTree } from './utils'

const items = shallowRef(ITEMS)

watchEffect((onCleanup) => {
  const dndFunction = combine(
    monitorForElements({
      onDrop(args) {
        const { location, source } = args
        // didn't drop on anything
        if (!location.current.dropTargets.length)
          return

        const itemId = source.data.id as string
        const target = location.current.dropTargets[0]
        const targetId = target.data.id as string

        const instruction: Instruction | null = extractInstruction(
          target.data,
        )

        if (instruction !== null) {
          items.value = updateTree(items.value, {
            type: 'instruction',
            instruction,
            itemId,
            targetId,
          }) ?? []
        }
      },
    }),
  )

  onCleanup(() => {
    dndFunction()
  })
})
</script>

<template>
  <Story title="Tree/DND" :layout="{ type: 'single', iframe: false }">
    <Variant title="default">
      <div class="flex justify-center w-full">
        <TreeRoot
          v-slot="{ flattenItems }"
          class="list-none select-none w-64 bg-white text-blackA11 rounded-md p-2 text-sm font-medium"
          :items="items"
          :get-key="(item) => item.title"
          multiple
          propagate-select
        >
          <TreeItem
            v-for="item in flattenItems"
            :key="item._id + item.index"
            :item="item"
            v-bind="item.bind"
            :style="{ 'padding-left': `${item.level}rem` }"
            class="flex items-center py-1.5 px-2 rounded outline-none focus:ring-grass9 focus:ring-2 data-[selected]:bg-grass4"
            @select.prevent
          />
        </TreeRoot>
      </div>
    </Variant>
  </Story>
</template>
