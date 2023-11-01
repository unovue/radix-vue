<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { makeCodeSandboxParams } from '../codeeditor'
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
</script>

<template>
  <form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
    <input type="hidden" name="query" value="file=src/App.vue">
    <input type="hidden" name="environment" value="server">
    <input type="hidden" name="hidedevtools" value="1">
    <input type="hidden" name="parameters" :value="makeCodeSandboxParams(name, sources)">

    <Tooltip :content="`Open ${name} in CodeSandbox`">
      <button type="submit">
        <Icon icon="ph-codesandbox-logo" />
      </button>
    </Tooltip>
  </form>
</template>
