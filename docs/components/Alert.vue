<script setup lang="ts">
const props = defineProps({
  /**
   * @values info, success, warning, danger
   */
  type: {
    type: String,
    default: 'info',
    validator (value: string) {
      return ['info', 'success', 'warning', 'danger', 'primary'].includes(value)
    }
  }
})
</script>

<template>
  <div class="alert" :class="[type]">
    <div class="alert-content">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  '.alert': {
    my: '{space.4}',
    borderRadius: '{radii.md}',
    px: '{space.4}',
    py: '{space.3}',
    fontSize: '{text.sm.fontSize}',
    lineHeight: '{text.sm.lineHeight}',
    border: '1px solid',
    '&.primary': {
      stateColors: 'primary'
    },
    '&.info': {
      stateColors: 'info'
    },
    '&.success': {
      stateColors: 'success'
    },
    '&.warning': {
      stateColors: 'warning'
    },
    '&.danger': {
      stateColors: 'danger'
    }
  }
})
</style>
