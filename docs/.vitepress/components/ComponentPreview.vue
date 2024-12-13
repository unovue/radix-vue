<script setup lang="ts">
import HeroContainer from './HeroContainer.vue'
import HeroCodeGroup from './HeroCodeGroup.vue'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

const props = withDefaults(defineProps<{
  name: string
  files?: string
  type?: 'demo' | 'example'
}>(), { type: 'demo' })

const cssFramework = useStorage<'css' | 'tailwind' | 'pinceau' >('cssFramework', 'tailwind')
const parsedFiles = computed(() => JSON.parse(decodeURIComponent(props.files ?? ''))[cssFramework.value])
</script>

<template>
  <HeroContainer
    :folder="name"
    :files="parsedFiles"
    :css-framework="cssFramework"
    :type="type"
  >
    <slot />

    <template #codeSlot>
      <HeroCodeGroup
        v-model="cssFramework"
        :type="type"
      >
        <slot name="tailwind" />
        <slot name="css" />
      </HeroCodeGroup>
    </template>
  </HeroContainer>
</template>
