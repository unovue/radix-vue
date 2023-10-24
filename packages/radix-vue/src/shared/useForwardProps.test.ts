import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { defineComponent, watch } from 'vue'
import { useForwardProps } from './useForwardProps'

function setupTestComponent(props: Record<string, any>) {
  return defineComponent({
    props,
    emits: ['log'],
    setup(props, { emit }) {
      const forwarded = useForwardProps(props)
      watch(forwarded, () => emit('log', forwarded.value), { immediate: true, deep: true })

      return { forwarded }
    },
    template: '<div>{{ forwarded }}</div>',
  })
}

describe('useForwardProps', () => {
  it('should forward nothing as no props provided', () => {
    const wrapper = mount(setupTestComponent({ id: String }))
    expect(wrapper.emitted('log')?.[0][0]).toStrictEqual({})
  })

  it('should forward default props', () => {
    const wrapper = mount(setupTestComponent({ id: { type: String, default: 'test' } }))
    expect(wrapper.emitted('log')?.[0][0]).toStrictEqual({ id: 'test' })
  })

  it('should forward provided props instead of default', () => {
    const wrapper = mount(setupTestComponent({ id: { type: String, default: 'test' } }), { props: { id: 'new-test' } })
    expect(wrapper.emitted('log')?.[0][0]).toStrictEqual({ id: 'new-test' })
  })

  it('should be reactive', async () => {
    const wrapper = mount(setupTestComponent({ id: { type: String, default: 'test' } }))
    expect(wrapper.emitted('log')?.[0][0]).toStrictEqual({ id: 'test' })
    await wrapper.setProps({ id: 'new-test' })
    expect(wrapper.emitted('log')?.[1][0]).toStrictEqual({ id: 'new-test' })
  })

  it('should not forwarded not provided props', () => {
    const wrapper = mount(setupTestComponent({ id: { type: String, default: 'test' } }), { props: { extra: 'not-related' }, attrs: { class: 'custom' } })
    expect(wrapper.emitted('log')?.[0][0]).toStrictEqual({ id: 'test' })
  })
})
