<script setup lang="ts">
import { DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'radix-vue'
import { Icon } from '@iconify/vue'
import { defineAsyncComponent, ref } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'

const SearchCommandbox = defineAsyncComponent(() => import('./SearchCommandbox.vue'))

const open = ref(false)
const { meta_k } = useMagicKeys()

whenever(meta_k, (n) => {
  if (n)
    open.value = true
})

function handleClose() {
  requestAnimationFrame(() => {
    open.value = false
  })
}
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger class="flex items-center space-x-2 text-sm py-1.5 px-3 rounded-lg border border-muted bg-background hover:bg-card text-muted-foreground">
      <Icon icon="lucide:search" />
      <span class="w-24 text-left">Search</span>
      <span class="prose dark:prose-invert prose-stone text-sm">
        <kbd>⌘ K</kbd>
      </span>
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay
        class="bg-background/50 fixed inset-0 z-30 backdrop-blur"
      />
      <DialogContent
        class="fixed top-[10%] left-[50%] max-h-[85vh] w-[90vw] max-w-[750px] translate-x-[-50%] rounded-xl bg-card shadow-xl focus:outline-none z-[100] border border-muted"
      >
        <DialogTitle class="sr-only">
          Search documentation
        </DialogTitle>
        <DialogDescription class="sr-only">
          Show related results based on search term
        </DialogDescription>

        <SearchCommandbox
          @close="handleClose"
        />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
