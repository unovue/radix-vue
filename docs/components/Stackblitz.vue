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
    const [folder, fileName] = file.split('/')
    const extension = file.split('.').pop()
    import(`../components/demo/${props.name}/${folder}/${fileName.replace(`.${extension}`, '')}.${extension}?raw`).then(
      res => (sources.value[fileName] = res.default),
    )
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
