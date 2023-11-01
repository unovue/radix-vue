<script setup lang="ts">
import HeroContainer from './NewHeroContainer.vue'
import HeroCodeGroup from './NewHeroCodeGroup.vue'
import ComponentLoader from './ComponentLoader.vue'
import { computed } from 'vue'

const props = defineProps<{
  name: string
  files?: string
}>()

const parsedFiles = computed(() => JSON.parse(decodeURIComponent(props.files ?? '')))
</script>

<template>
  <HeroContainer>
    <ComponentLoader :name="name" />

    <template #codeSlot>
      <ClientOnly>
        <HeroCodeGroup>
          <slot name="tailwind" />
          <slot name="css" />
        </HeroCodeGroup>
      </ClientOnly>
    </template>
  </HeroContainer>
</template>
