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
    switch (file.split('.').pop()) {
      case 'vue': {
        import(`../components/demo/${props.name}/${file.replace('.vue', '')}.vue?raw`).then(
          res => (sources.value[file.split('/').pop() ?? ''] = res.default),
        )
        break
      }
      case 'js': {
        import(`../components/demo/${props.name}/${file.replace('.js', '')}.js?raw`).then(
          res => (sources.value[file.split('/').pop() ?? ''] = res.default),
        )
        break
      }
      case 'css': {
        import(`../components/demo/${props.name}/${file.replace('.css', '')}.css?raw`).then(
          res => (sources.value[file.split('/').pop() ?? ''] = res.default),
        )
        break
      }
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
