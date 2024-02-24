<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'radix-vue'
</script>

<template>
  <div class="w-full h-64 px-8 text-green9 font-medium text-sm">
    <SplitterGroup direction="horizontal">
      <SplitterPanel :min-size="20" class="bg-white rounded-xl flex items-center justify-center">
        Panel A
      </SplitterPanel>
      <SplitterResizeHandle class="w-2" />
      <SplitterPanel :min-size="20">
        <SplitterGroup direction="vertical">
          <SplitterPanel :min-size="20" class="bg-white rounded-xl flex items-center justify-center">
            Panel B
          </SplitterPanel>
          <SplitterResizeHandle class="h-2" />
          <SplitterPanel :min-size="20" class="bg-white rounded-xl flex items-center justify-center">
            Panel C
          </SplitterPanel>
        </SplitterGroup>
      </SplitterPanel>
    </SplitterGroup>
  </div>
</template>
