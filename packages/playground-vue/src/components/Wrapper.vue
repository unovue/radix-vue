<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { provide } from 'vue'

provide(/* key */ 'message', /* value */ 'hello!')

const number = ref(0)

function addNum() {
  number.value += 1
}

</script>