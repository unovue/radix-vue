<script setup lang="ts">
import { ref } from 'vue'
import { Label, PinInputInput, PinInputRoot } from 'radix-vue'

const value = ref<string[]>([])
const handleComplete = (e: string[]) => alert(e.join(''))
</script>

<template>
  <div>
    <Label for="pin-input" class="text-white">Pin Input</Label>
    <PinInputRoot
      id="pin-input"
      v-model="value"
      class="flex gap-2 items-center mt-1"
      @complete="handleComplete"
    >
      <PinInputInput
        v-for="(id, index) in 5"
        :key="id"
        :index="index"
        placeholder="○"
        class="w-10 h-10 rounded text-center text-green10 placeholder:text-mauve7 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
      />
    </PinInputRoot>
  </div>
</template>
