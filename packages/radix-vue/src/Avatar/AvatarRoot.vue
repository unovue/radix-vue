<script lang="ts">
import type { Ref } from 'vue'
import type { ImageLoadingStatus } from './utils'
import { createContext } from '@/shared'

export interface AvatarRootProps extends PrimitiveProps {}

export type AvatarRootContext = {
  imageLoadingStatus: Ref<ImageLoadingStatus>
}

export const [injectAvatarRootContext, provideAvatarRootContext]
  = createContext<AvatarRootContext>('AvatarRoot')
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { Primitive, type PrimitiveProps } from '../Primitive'

const props = withDefaults(defineProps<AvatarRootProps>(), {
  as: 'span',
})

provideAvatarRootContext({
  imageLoadingStatus: ref<ImageLoadingStatus>('loading'),
})
</script>

<template>
  <Primitive :as="as" :as-child="props.asChild">
    <slot />
  </Primitive>
</template>
