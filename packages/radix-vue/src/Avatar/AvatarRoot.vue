<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import type { ImageLoadingStatus } from './utils'

export interface AvatarRootProps extends PrimitiveProps {}

export const AVATAR_INJECTION_KEY
  = Symbol() as InjectionKey<AvatarProvideValue>

interface AvatarProvideValue {
  imageLoadingStatus: Ref<ImageLoadingStatus>
}
</script>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { Primitive, type PrimitiveProps } from '../Primitive'

const props = withDefaults(defineProps<AvatarRootProps>(), {
  as: 'span',
})

const imageLoadingStatusRef = ref<ImageLoadingStatus>('loading')

provide(AVATAR_INJECTION_KEY, {
  imageLoadingStatus: imageLoadingStatusRef,
})
</script>

<template>
  <Primitive :as="as" :as-child="props.asChild">
    <slot />
  </Primitive>
</template>
