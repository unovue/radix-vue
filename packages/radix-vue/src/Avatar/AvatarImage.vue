<script lang="ts">
export type AvatarImageEmits = {
  'loadingStatusChange': [value: ImageLoadingStatus]
}
export interface AvatarImageProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { useAttrs, watch } from 'vue'
import { Primitive, type PrimitiveProps } from '../Primitive'
import { injectAvatarContext } from './AvatarRoot.vue'
import { type ImageLoadingStatus, useImageLoadingStatus } from './utils'

const props = withDefaults(defineProps<AvatarImageProps>(), { as: 'img' })

const emits = defineEmits<AvatarImageEmits>()

const context = injectAvatarContext()

const src = useAttrs().src as string
const imageLoadingStatus = useImageLoadingStatus(src)

watch(
  imageLoadingStatus,
  (newValue) => {
    emits('loadingStatusChange', newValue)
    if (newValue !== 'idle')
      context.imageLoadingStatus.value = newValue
  },
  { immediate: true },
)
</script>

<template>
  <Primitive
    v-if="imageLoadingStatus === 'loaded'"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
