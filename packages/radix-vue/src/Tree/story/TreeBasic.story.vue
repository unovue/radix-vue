<script setup lang="ts">
import { TreeItem, TreeRoot } from '../'

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
</script>

<template>
  <Story title="Tree/Basic" :layout="{ type: 'single', iframe: false }">
    <Variant title="default">
      <TreeRoot
        v-slot="{ node }"
        :items="items"
        :get-key="(item) => item.title"
        class="list-none select-none"
      >
        <TreeItem
          :style="{ 'padding-left': `${node.level}rem` }"
        >
          {{ node.title }}
        </TreeItem>
      </TreeRoot>
    </Variant>
  </Story>
</template>
