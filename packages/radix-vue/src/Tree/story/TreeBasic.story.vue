<script setup lang="ts">
import { TreeGroup, TreeGroupList, TreeItem, TreeRoot } from '../'

const children = [
  { title: 'JS.vue', icon: 'vue' },
  { title: 'vue.vue', icon: 'vue' },
]

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
      <TreeRoot :items class="list-none select-none">
        <TreeItem value="Item1">
          Item1
        </TreeItem>
        <TreeItem value="Item2">
          Item2
        </TreeItem>
        <TreeGroup value="Framework">
          <span>Framework</span>
          <TreeGroupList>
            <TreeItem v-for="item in children" :key="item.title" :value="item">
              {{ item.title }}
            </TreeItem>
          </TreeGroupList>
        </TreeGroup>
      </TreeRoot>
    </Variant>
  </Story>
</template>
