<script setup lang="ts">
interface ProseCodeInlineProps {
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<ProseCodeInlineProps>(), {
  variant: 'primary',
})
</script>

<template>
  <code class="px-1 text-[13px] rounded-sm " :class="`${props.variant === 'primary' ? 'bg-green-600/20 text-green-400' : 'bg-neutral-600/30 text-neutral-400'}`"><slot /></code>
</template>