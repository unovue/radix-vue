<script setup lang="ts">
import { type Slots, computed, useSlots } from 'vue'
import CodeSandbox from './CodeSandbox.vue'
import Stackblitz from './Stackblitz.vue'

withDefaults(
  defineProps<{
    overflow?: boolean
    folder?: string
  }>(),
  { folder: '' },
)

const slots = useSlots()
const files = computed<string[]>(
  () => (slots?.codeSlot?.()?.[0].children as Slots)?.default?.().map(i => i?.props?.filename) ?? [],
)
</script>

<template>
  <div class="relative text-[15px] text-black">
    <div
      class="vp-raw bg-gradient-to-br p-4 rounded-t-lg from-teal9 to-green9 w-full relative items-center justify-center flex"
      :class="{ 'overflow-x-auto': overflow }"
    >
      <div class="w-full max-w-[700px] flex items-center py-12 sm:py-[100px] custom-justify-center">
        <slot />

        <CodeSandbox
          v-if="folder"
          class="hidden sm:block absolute bottom-4 right-4"
          :name="folder"
          :files="files"
        />
        <Stackblitz
          v-if="folder"
          class="hidden sm:block absolute bottom-4 right-12"
          :name="folder"
          :files="files"
        />
      </div>
    </div>
    <slot name="codeSlot" />
  </div>
</template>

<style scoped>
:deep(input) {
  background-color: white;
}

:deep(li) {
  margin-top: 0 !important;
}

:deep(button:focus),
:deep(button:focus-visible) {
  outline: 0;
}

:deep(h3) {
  margin: 0px !important;
  font-weight: unset !important;
}

:deep(pre) {
  z-index: 0 !important;
}
</style>
