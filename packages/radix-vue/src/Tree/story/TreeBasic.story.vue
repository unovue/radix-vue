<script setup lang="ts">
import { TreeItem, TreeRoot } from '../'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const items = [
  { title: 'index.vue', icon: 'vue' },
  {
    title: 'lib',
    icon: 'folder',
    children: [
      {
        title: 'tree',
        icon: 'folder',
        children: [
          {
            title: 'Tree.vue',
            icon: 'vue',
          },
          {
            title: 'TreeView.vue',
            icon: 'vue',
          },
        ],
      },
      {
        title: 'icons',
        icon: 'folder',
        children: [
          { title: 'JS.vue', icon: 'vue' },
          { title: 'vue.vue', icon: 'vue' },
        ],
      },
      {
        title: 'index.js',
        icon: 'js',
      },
    ],
  },
  {
    title: 'routes',
    icon: 'folder',
    children: [
      {
        title: 'contents',
        icon: 'folder',
        children: [
          {
            title: '+layout.vue',
            icon: 'vue',
          },
          {
            title: '+page.vue',
            icon: 'vue',
          },
        ],
      },
    ],
  },
]

const modelValue = ref<{ title: string, icon: string }>({
  title: '+page.vue',
  icon: 'vue',
})
</script>

<template>
  <Story title="Tree/Basic" :layout="{ type: 'single', iframe: false }">
    <Variant title="default">
      <TreeRoot
        v-slot="{ node, value }"
        v-model="modelValue"
        :items="items"
        :get-key="(item) => item.title"
        class="list-none select-none"
      >
        <TreeItem
          class="flex items-center"
          :style="{ 'padding-left': `${node.level}rem` }"
          :class="{ 'bg-grass11': node.isSelected }"
          :value="node.value"
        >
          <Icon v-if="node.hasChildren" icon="radix-icons:chevron-down" class="h-4 w-4" />
          <span>
            {{ value.title }}
          </span>
        </TreeItem>
      </TreeRoot>
    </Variant>
  </Story>
</template>
