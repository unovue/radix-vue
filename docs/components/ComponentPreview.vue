<script setup lang="ts">
import { useSlots } from 'vue'
import HeroContainer from './HeroContainer.vue'
import HeroCodeGroup from './HeroCodeGroup.vue'
import ComponentLoader from './ComponentLoader.vue'

const props = defineProps<{
  name: string
}>()

const slot = useSlots()
console.log(slot.test?.())
</script>

<template>
  <HeroContainer>
    <Suspense>
      <ComponentLoader :name="name" />
    </Suspense>

    <template #codeSlot>
      <HeroCodeGroup>
        <slot />
      </HeroCodeGroup>
    </template>
  </HeroContainer>
</template>
