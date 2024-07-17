<script setup lang="ts">
import CodeSandbox from '../../components/CodeSandbox.vue'
import Stackblitz from '../../components/Stackblitz.vue'

withDefaults(
  defineProps<{
    overflow?: boolean
    folder?: string
    files?: string[]
    cssFramework?: string
  }>(),
  { folder: '', files: () => [] },
)
</script>

<template>
  <div class="relative text-[15px] text-black">
    <div
      class="not-prose bg-gradient-to-br p-4 rounded-t-lg from-teal9 to-green9 w-full relative items-center justify-center flex"
      :class="{ 'overflow-x-auto': overflow }"
    >
      <div class="w-full max-w-[700px] flex items-center py-12 sm:py-[100px] custom-justify-center ">
        <slot />

        <Stackblitz
          v-if="folder"
          :key="cssFramework"
          class="hidden sm:block absolute bottom-4 right-12"
          :name="folder"
          :files="files"
        />
        <CodeSandbox
          v-if="folder"
          :key="cssFramework"
          class="hidden sm:block absolute bottom-4 right-4"
          :name="folder"
          :files="files"
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
