<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { makeStackblitzParams } from '../codeeditor'
import Tooltip from './Tooltip.vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  name: string
  files: string[]
}>()

const sources = ref<Record<string, string>>({})

onMounted(() => {
  props.files?.forEach((file) => {
    if (file.endsWith('.vue')) {
      import(`../components/demo/${props.name}/${file.replace('.vue', '')}.vue?raw`).then(
        res => (sources.value[file] = res.default),
      )
    }
    else if (file.endsWith('.js')) {
      import(`../components/demo/${props.name}/${file.replace('.js', '')}.js?raw`).then(
        res => (sources.value[file] = res.default),
      )
    }
  })
})

function handleClick() {
  makeStackblitzParams(props.name, sources.value)
}
</script>

<template>
  <div>
    <Tooltip :content="`Open ${name} in Stackblitz`">
      <button @click="handleClick">
        <Icon icon="simple-icons:stackblitz" />
      </button>
    </Tooltip>
  </div>
</template>
