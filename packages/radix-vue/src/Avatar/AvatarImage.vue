<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { ImageLoadingStatus } from './utils'
import { useForwardExpose } from '@/shared'

export type AvatarImageEmits = {
  /** A callback providing information about the loading status of the image. <br>
   * This is useful in case you want to control more precisely what to render as the image is loading. */
  'loadingStatusChange': [value: ImageLoadingStatus]
}
export interface AvatarImageProps extends PrimitiveProps {
  src: string
}
</script>

<script setup lang="ts">
import { toRefs, watch } from 'vue'
import { Primitive } from '../Primitive'
import { injectAvatarRootContext } from './AvatarRoot.vue'
import { useImageLoadingStatus } from './utils'

const props = withDefaults(defineProps<AvatarImageProps>(), { as: 'img' })
const emits = defineEmits<AvatarImageEmits>()

const { src } = toRefs(props)
useForwardExpose()
const rootContext = injectAvatarRootContext()

const imageLoadingStatus = useImageLoadingStatus(src)

watch(
  imageLoadingStatus,
  (newValue) => {
    emits('loadingStatusChange', newValue)
    if (newValue !== 'idle')
      rootContext.imageLoadingStatus.value = newValue
  },
  { immediate: true },
)
</script>

<template>
  <Primitive
    v-if="imageLoadingStatus === 'loaded'"
    role="img"
    :as-child="asChild"
    :as="as"
    :src="src"
  >
    <slot />
  </Primitive>
</template>
