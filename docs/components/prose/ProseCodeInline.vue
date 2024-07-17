<script setup lang="ts">
interface ProseCodeInlineProps {
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<ProseCodeInlineProps>(), {
  variant: 'primary',
})
</script>

<template>
  <code
    class=""
    :class="`${
      props.variant === 'primary'
        ? 'text-primary'
        : 'text-foreground'
    }`"
  >
    <slot />
  </code>
</template>
