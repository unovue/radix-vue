import { onMounted, onUnmounted, ref } from 'vue'

export type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error'

export function useImageLoadingStatus(src?: string) {
  const loadingStatus = ref<ImageLoadingStatus>('idle')
  const isMounted = ref(false)
  onMounted(() => {
    if (!src) {
      loadingStatus.value = 'error'
      return
    }

    isMounted.value = true
    const image = new window.Image()

    const updateStatus = (status: ImageLoadingStatus) => () => {
      if (!isMounted.value)
        return
      loadingStatus.value = status
    }

    loadingStatus.value = 'loading'
    image.onload = updateStatus('loaded')
    image.onerror = updateStatus('error')
    image.src = src
  })

  onUnmounted(() => {
    isMounted.value = false
  })

  return loadingStatus
}
