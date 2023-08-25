<script setup lang="ts">
const props = defineProps({
  /**
   * @values info, success, warning, danger
   */
  type: {
    type: String,
    default: "info",
    validator(value: string) {
      return ["info", "success", "warning", "danger", "primary"].includes(value);
    },
  },
});
</script>

<template>
  <div class="alert" :class="[type]">
    <div class="alert-content">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>
