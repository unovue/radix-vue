<script setup lang="ts">

interface ProseCodeInlineProps {
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<ProseCodeInlineProps>(), {
  variant: 'primary',
})
</script>

<template>
  <pre class="contents">
  <code class="px-1 text-[13px] rounded-sm"
    :class="`${props.variant === 'primary' ? '!bg-[#0F291E] !text-[#4CC38A]' : '!bg-neutral-600/30 !text-neutral-400'}`"><slot /></code>
  </pre>
</template>