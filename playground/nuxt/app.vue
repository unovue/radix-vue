<script setup lang="ts">
import Card from './components/Card.vue'
import { ConfigProvider } from 'radix-vue'

const fn = () => useId()
</script>

<template>
  <div>
    <ConfigProvider :use-id="fn">
      <div class="w-full flex flex-col items-center">
        <div class="max-w-6xl w-full flex flex-col lg:grid lg:grid-cols-3 gap-4 pt-40 pb-40">
          <Card>
            <Accordion />
          </Card>
        </div>
      </div>
    </ConfigProvider>
  </div>
</template>

<style>
body {
  @apply bg-black text-white;
}
</style>
