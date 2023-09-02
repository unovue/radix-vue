<script lang="ts">
import type { Ref } from 'vue'
import type { ImageLoadingStatus } from './utils'
import { createContext } from '@/shared'

export interface AvatarRootProps extends PrimitiveProps {}

interface AvatarContextValue {
  imageLoadingStatus: Ref<ImageLoadingStatus>
}

export const [injectAvatarContext, provideAvatarContext]
  = createContext<AvatarContextValue>('AvatarRoot')
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { Primitive, type PrimitiveProps } from '../Primitive'

const props = withDefaults(defineProps<AvatarRootProps>(), {
  as: 'span',
})

const imageLoadingStatus = ref<ImageLoadingStatus>('loading')

provideAvatarContext({ imageLoadingStatus })
</script>

<template>
  <Primitive :as="as" :as-child="props.asChild">
    <slot />
  </Primitive>
</template>
