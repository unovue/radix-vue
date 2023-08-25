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
    class="py-0.5 px-1 rounded-none inline"
    :class="`${
      props.variant === 'primary'
        ? 'dark:!bg-[#0F291E] dark:!text-[#4CC38A]'
        : 'dark:!bg-neutral-600/30 dark:!text-neutral-400'
    }`"
  >
    <slot />
  </code>
</template>
