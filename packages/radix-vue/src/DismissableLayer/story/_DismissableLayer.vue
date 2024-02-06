<script setup lang="ts">
import { ref } from 'vue'
import type { DismissableLayerEmits } from '..'
import { DismissableLayer } from '..'
import { useEmitAsProps } from '@/shared'

defineProps<{
  openLabel?: string
  closeLabel?: string
  outsideLabel?: string
}>()

const emits = defineEmits<DismissableLayerEmits>()

const open = ref(false)

function handleDismiss() {
  open.value = false
}
</script>

<template>
  <div class="flex flex-col">
    <button @click="open = !open">
      {{ openLabel }}
    </button>

    <DismissableLayer
      v-if="open"
      id="layer"
      v-bind="useEmitAsProps(emits)"
      @dismiss="handleDismiss"
    >
      <div>Content</div>
      <button type="button" @click="open = false">
        {{ closeLabel }}
      </button>
    </DismissableLayer>

    <button>
      {{ outsideLabel }}
    </button>
  </div>
</template>
