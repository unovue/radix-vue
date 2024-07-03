import { injectConfigProviderContext } from '@/ConfigProvider/ConfigProvider.vue'
import { type Ref, computed, ref } from 'vue'

export function useLocale(locale?: Ref<string | undefined>) {
  const context = injectConfigProviderContext({
    locale: ref('en'),
  })
  return computed(() => locale?.value || context.locale?.value || 'en')
}
