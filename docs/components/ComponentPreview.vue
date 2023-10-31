<script setup lang="ts">
import HeroContainer from './HeroContainer.vue'
import HeroCodeGroup from './NewHeroCodeGroup.vue'
import ComponentLoader from './ComponentLoader.vue'

defineProps<{
  name: string
}>()
</script>

<template>
  <HeroContainer>
    <ComponentLoader :name="name" />

    <template #codeSlot>
      <HeroCodeGroup>
        <slot name="tailwind" />
        <slot name="css" />
      </HeroCodeGroup>
    </template>
  </HeroContainer>
</template>
