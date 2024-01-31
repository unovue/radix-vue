import { beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'

describe('useBodyScrollLock', () => {
  vi.mock('@/ConfigProvider/ConfigProvider.vue', async () => {
    return {
      injectConfigProviderContext: () => {
        return {
          dir: ref('ltr'),
          scrollBody: ref(true),
        }
      },
    }
  })

  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 })
  Object.defineProperty(document, 'clientWidth', { writable: true, configurable: true, value: 190 })
  Object.defineProperty(document.documentElement, 'clientWidth', { writable: true, configurable: true, value: 190 })

  beforeEach(() => {
    document.body.style.overflow = ''
    vi.resetModules()
  })

  it('should lock the body propery', async () => {
    const { useBodyScrollLock } = await import('@/shared/useBodyScrollLock')

    const locked = useBodyScrollLock()
    await nextTick()
    expect(document.body.style.overflow).toBe('')

    locked.value = true
    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')

    locked.value = false
    await nextTick()
    expect(document.body.style.overflow).toBe('')
  })

  it('should lock and unlock the body when mounted and unmounted', async () => {
    const { useBodyScrollLock } = await import('@/shared/useBodyScrollLock')

    const wrapper = mount({
      template: '<p>Hello, world</p>',
      setup() {
        useBodyScrollLock(true)
      },
    },
    {
      attachTo: document.body,
    },
    )

    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')
    wrapper.unmount()
    expect(document.body.style.overflow).toBe('')
  })

  it('should only unlock once all are unmounted', async () => {
    const { useBodyScrollLock } = await import('@/shared/useBodyScrollLock')

    const l1 = useBodyScrollLock(true)
    const l2 = useBodyScrollLock(true)
    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')

    l1.value = false
    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')

    l2.value = false
    await nextTick()
    expect(document.body.style.overflow).toBe('')
  })

  it('should only unlock once all are unlocked', async () => {
    const { useBodyScrollLock } = await import('@/shared/useBodyScrollLock')

    const l1 = useBodyScrollLock(true)
    const l2 = useBodyScrollLock(true)
    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')

    l1.value = false
    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')

    l2.value = false
    await nextTick()
    expect(document.body.style.overflow).toBe('')
  })

  it('should not automatically lock', async () => {
    const { useBodyScrollLock } = await import('@/shared/useBodyScrollLock')

    useBodyScrollLock()
    await nextTick()
    expect(document.body.style.overflow).toBe('')
  })

  it('should preserve user overflow', async () => {
    const { useBodyScrollLock } = await import('@/shared/useBodyScrollLock')

    document.body.style.overflow = 'scroll'

    const locked = useBodyScrollLock()
    await nextTick()
    expect(document.body.style.overflow).toBe('scroll')

    locked.value = true
    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')

    locked.value = false
    await nextTick()
    expect(document.body.style.overflow).toBe('scroll')
  })
})
