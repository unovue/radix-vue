<script setup lang="ts">
import { ref } from 'vue'
import { PinInputInput, PinInputLabel, PinInputRoot } from '..'

const value = ref<string[]>([])
</script>

<template>
  <Story title="PinInput/Default" :layout="{ type: 'single', iframe: false }">
    <Variant title="default">
      <PinInputRoot
        v-model="value"
        class="flex gap-2 items-center"
        @complete="e => console.log(e.join(''))"
      >
        <PinInputLabel>Test label</PinInputLabel>
        <PinInputInput
          v-for="(id, index) in 5"
          :key="id"
          class="w-10 h-10 rounded text-center text-green10 placeholder:text-mauve5"
          :index="index"
        />
      </PinInputRoot>
    </Variant>
  </Story>
</template>
