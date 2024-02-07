<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from '../'
</script>

<template>
  <Story title="Splitter/Demo" :layout="{ type: 'single', iframe: false }">
    <Variant title="default">
      <div class="w-[400px] h-48">
        <SplitterGroup>
          <SplitterPanel class="flex items-center justify-center bg-blackA8 p-8 rounded-lg">
            Panel A
          </SplitterPanel>
          <SplitterResizeHandle class="w-1" />
          <SplitterPanel class="flex items-center justify-center bg-blackA8 p-8 rounded-lg">
            Panel B
          </SplitterPanel>
        </SplitterGroup>
      </div>
    </Variant>
  </Story>
</template>
