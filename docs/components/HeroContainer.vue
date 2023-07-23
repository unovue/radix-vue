<script setup lang="ts">
import DemoContainer from './DemoContainer.vue'
</script>

<template>
    <DemoContainer>
        <slot />
    </DemoContainer>
    <slot name="codeSlot" />
</template>

<style scoped>
:deep(input) {
  background-color: white;
}

:deep(li) {
  margin-top: 0 !important;
}

:deep(button:focus),
:deep(button:focus-visible) {
  outline: 0;
}

:deep(h3) {
  margin: 0px !important;
  font-weight: unset !important;
}

:deep(pre) {
  z-index: 0 !important;
}
</style>
