<script setup lang="ts">
import { ref } from 'vue'
import { Label, PinInputInput, PinInputRoot } from 'radix-vue'

const value = ref<string[]>([])
function handleComplete(e: string[]) {
  // eslint-disable-next-line no-alert
  alert(e.join(''))
}
</script>

<template>
  <div>
    <Label
      for="pin-input"
      class="text-white"
    >Pin Input</Label>
    <PinInputRoot
      id="pin-input"
      v-model="value"
      placeholder="○"
      class="flex gap-2 items-center mt-1"
      @complete="handleComplete"
    >
      <PinInputInput
        v-for="(id, index) in 5"
        :key="id"
        :index="index"
        class="w-10 h-10 bg-white rounded text-center shadow-lg text-green10 placeholder:text-mauve8 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
      />
    </PinInputRoot>
  </div>
</template>
