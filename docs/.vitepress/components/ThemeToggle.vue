<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { useData } from 'vitepress'
import { Icon } from '@iconify/vue'
import { ref, watchPostEffect } from 'vue'

const { isDark } = useData()

const switchTitle = ref('')

watchPostEffect(() => {
  switchTitle.value = isDark.value
    ? 'Switch to light theme'
    : 'Switch to dark theme'
})
</script>

<template>
  <SwitchRoot
    v-model:checked="isDark"
    class="w-11 h-6 focus-within:outline focus-within:outline-black flex bg-muted border border-muted rounded-full relative"
    :aria-label="switchTitle"
  >
    <SwitchThumb
      class="w-5 h-5 my-auto bg-background text-xs flex items-center justify-center text-muted-foreground border border-muted rounded-full !transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-5"
    >
      <Icon
        v-if="isDark"
        icon="lucide:moon-star"
      />
      <Icon
        v-else
        icon="lucide:sun"
      />
    </SwitchThumb>
  </SwitchRoot>
</template>
