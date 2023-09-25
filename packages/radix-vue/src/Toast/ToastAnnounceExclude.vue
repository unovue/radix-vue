<script setup lang="ts">
import { Primitive } from '@/Primitive'
import type { PrimitiveProps } from '@/Primitive'

export interface ToastAnnounceExcludeProps extends PrimitiveProps {
  altText?: string
}
defineProps<ToastAnnounceExcludeProps>()
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-radix-toast-announce-exclude=""
    :data-radix-toast-announce-alt="altText || undefined"
  >
    <slot />
  </Primitive>
</template>
