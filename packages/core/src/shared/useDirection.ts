import { injectConfigProviderContext } from '@/ConfigProvider/ConfigProvider.vue'
import type { Direction } from './types'
import { type Ref, computed, ref } from 'vue'

export function useDirection(dir?: Ref<Direction | undefined>) {
  const context = injectConfigProviderContext({
    dir: ref('ltr'),
  })
  return computed(() => dir?.value || context.dir?.value || 'ltr')
}
