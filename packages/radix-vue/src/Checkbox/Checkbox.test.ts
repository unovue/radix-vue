import { describe, expect, it } from 'vitest'
import Checkbox from './story/_Checkbox.vue'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'
import { findByTestId } from '@testing-library/vue'

globalThis.ResizeObserver = class ResizeObserver {
  cb: any
  constructor(cb: any) {
    this.cb = cb
  }

  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }])
  }

  unobserve() {}
  disconnect() {}
}

describe('given a default Checkbox', () => {
  it('should pass axe accessibility tests', async () => {
    const wrapper = mount(Checkbox, { attachTo: document.body })
    expect(await axe(wrapper.element, {
      rules: {
        label: { enabled: false },
      },
    })).toHaveNoViolations()
  })

  it('should render checkbox', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.element).toBeTruthy()
  })

  describe('when clicking the checkbox', async () => {
    const wrapper = mount(Checkbox)
    const checkbox = wrapper.find('button')
    await checkbox.trigger('click')
    const indicator = await findByTestId(wrapper.element as HTMLElement, 'test-indicator', { })
    it('should render a visible indicator', async () => {
      expect(document).toContain(indicator)
    })

    await checkbox.trigger('click')
    it('should remove the indicator', async () => {
      expect(document).not.toContain(indicator)
    })
  })
})

describe('given a disabled Checkbox', () => {
  const wrapper = mount(Checkbox, { props: { disabled: true } })

  it('should have no accessibility violations', async () => {
    expect(await axe(wrapper.element, {
      rules: {
        label: { enabled: false },
      },
    })).toHaveNoViolations()
  })

  describe('when clicking the checkbox', async () => {
    const checkbox = wrapper.find('button')
    await checkbox.trigger('click')
    it('should not render a indicator', async () => {
      expect(wrapper.find('span').exists()).toBeFalsy()
    })
  })
})

describe('given checked value as "indeterminate"', async () => {
  const wrapper = mount(Checkbox, { props: { checked: 'indeterminate' } })

  it('should have [data-state] of "indeterminate"', () => {
    expect(wrapper.find('button').attributes('data-state')).toBe('indeterminate')
    expect(wrapper.find('span').attributes('data-state')).toBe('indeterminate')
  })

  it('should still be clickable', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('button').attributes('data-state')).toBe('unchecked')
  })
})
