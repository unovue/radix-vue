<script setup lang="ts">
import HeroContainer from './NewHeroContainer.vue'
import HeroCodeGroup from './NewHeroCodeGroup.vue'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

const props = defineProps<{
  name: string
  files?: string
}>()

const cssFramework = useStorage<'css' | 'tailwind' | 'pinceau' >('cssFramework', 'tailwind')
const parsedFiles = computed(() => JSON.parse(decodeURIComponent(props.files ?? ''))[cssFramework.value])
</script>

<template>
  <HeroContainer
    :folder="name"
    :files="parsedFiles"
    :css-framework="cssFramework"
  >
    <slot />

    <template #codeSlot>
      <HeroCodeGroup v-model="cssFramework">
        <slot name="tailwind" />
        <slot name="css" />
      </HeroCodeGroup>
    </template>
  </HeroContainer>
</template>
