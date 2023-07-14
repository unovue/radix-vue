<script setup lang="ts">

interface ProseCodeInlineProps {
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<ProseCodeInlineProps>(), {
  variant: 'primary',
})
</script>

<template>
  <code class="px-1 text-[13px] rounded-sm"
    :class="`${props.variant === 'primary' ? '!bg-green12 !text-green-500' : '!bg-neutral-600/30 !text-neutral-400'}`"><slot /></code>
</template>