<script setup lang="ts">
import { AspectRatio } from 'radix-vue'
import { onMounted, ref } from 'vue'

defineOptions({
  inheritAttrs: false,
})

defineProps<{ src: string }>()

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <AspectRatio>
    <iframe
      :src="src"
      class="w-full h-full"
      v-bind="$attrs"
    />
  </AspectRatio>
</template>
