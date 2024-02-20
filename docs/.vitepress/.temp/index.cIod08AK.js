const index = `<script setup lang="ts">
import { ref } from 'vue'
import { Label, PinInputInput, PinInputRoot } from 'radix-vue'
import './styles.css'

const value = ref<string[]>([])
const handleComplete = (e: string[]) => alert(e.join(''))
<\/script>

<template>
  <div>
    <Label for="pin-input" class="Text">Pin Input</Label>
    <PinInputRoot
      id="pin-input"
      v-model="value"
      class="PinInputRoot"
      @complete="handleComplete"
    >
      <PinInputInput
        v-for="(id, index) in 5"
        :key="id"
        :index="index"
        placeholder="○"
        class="PinInputInput"
      />
    </PinInputRoot>
  </div>
</template>
`;
export {
  index as default
};
