<script lang="ts">
export type AvatarImageEmits = {
  'loadingStatusChange': [value: ImageLoadingStatus]
}
export interface AvatarImageProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject, onUpdated, ref, useAttrs, watch } from 'vue'
import { Primitive, type PrimitiveProps } from '../Primitive'
import { AVATAR_INJECTION_KEY } from './AvatarRoot.vue'
import { type ImageLoadingStatus, useImageLoadingStatus } from './utils'

const props = withDefaults(defineProps<AvatarImageProps>(), { as: 'img' })

const emits = defineEmits<AvatarImageEmits>()

const injectedValue = inject(AVATAR_INJECTION_KEY)

const src = ref(useAttrs().src as string)
const imageLoadingStatus = useImageLoadingStatus(src)

onUpdated(() => {
  src.value = useAttrs().src as string
})

watch(
  imageLoadingStatus,
  (newValue) => {
    emits('loadingStatusChange', newValue)
    if (newValue !== 'idle')
      injectedValue!.imageLoadingStatus.value = newValue
  },
  { immediate: true },
)
</script>

<template>
  <Primitive
    v-if="imageLoadingStatus === 'loaded'"
    role="img"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
