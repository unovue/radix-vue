<script lang="ts">
export interface ScreenReaderOnlyProps {
  ariaLabel: string;
  id?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<ScreenReaderOnlyProps>();
</script>

<template>
  <span :id="props.id" role="tooltip" style="
      position: absolute;
      border: 0px;
      width: 1px;
      height: 1px;
      padding: 0px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0px, 0px, 0px, 0px);
      white-space: nowrap;
      overflow-wrap: normal;
    ">{{ props.ariaLabel }}</span>
</template>
