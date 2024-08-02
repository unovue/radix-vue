<script setup lang="ts">
import { ref, watch } from 'vue'
import CodeSandbox from '../../components/CodeSandbox.vue'
import Stackblitz from '../../components/Stackblitz.vue'

const props = withDefaults(
  defineProps<{
    overflow?: boolean
    folder?: string
    files?: string[]
    cssFramework?: string
    type?: 'demo' | 'example'
  }>(),
  { folder: '', files: () => [] },
)

const sources = ref<Record<string, string>>({})

watch(() => props.cssFramework, () => {
  sources.value = {} // reset sources everytime the value changes
  props.files?.forEach((file) => {
    const [folder, fileName] = file.split('/')
    const extension = file.split('.').pop()

    if (props.type === 'demo') {
      import(`../../components/demo/${props.folder}/${folder}/${fileName.replace(`.${extension}`, '')}.${extension}?raw`).then(
        res => (sources.value[fileName] = res.default),
      )
    }
    else {
      import(`../../components/examples/${props.folder}/${file.replace(`.${extension}`, '')}.${extension}?raw`).then(
        res => (sources.value[file] = res.default),
      )
    }
  })
}, { immediate: true })
</script>

<template>
  <div
    class="relative text-[15px] text-black"
    :class="{ 'my-4': type === 'example' }"
  >
    <div
      class="not-prose p-4 rounded-t-xl bg-card w-full relative items-center justify-center flex border border-muted border-b-0"
      :class="{ 'overflow-x-auto': overflow, 'min-h-[400px]': type === 'example' }"
    >
      <div class="w-full max-w-[700px] flex items-center py-12 sm:py-[100px] custom-justify-center ">
        <slot />

        <Stackblitz
          v-if="folder"
          class="hidden sm:block absolute bottom-4 right-12"
          :name="folder"
          :files="files"
          :sources="sources"
        />
        <CodeSandbox
          v-if="folder"
          class="hidden sm:block absolute bottom-4 right-4"
          :name="folder"
          :files="files"
          :sources="sources"
        />
      </div>
    </div>
    <slot name="codeSlot" />
  </div>
</template>

<style scoped>
:deep(li) {
  margin-top: 0 !important;
}

:deep(h3) {
  margin: 0px !important;
  font-weight: unset !important;
}

:deep(pre) {
  z-index: 0 !important;
}
</style>
