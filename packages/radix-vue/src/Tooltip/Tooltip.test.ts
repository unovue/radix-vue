import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Tooltip from './stories/_Tooltip.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  const wrapper = mount(Tooltip, { attachTo: document.body })
  expect(await axe(wrapper.element)).toHaveNoViolations()

  await wrapper.find('button').trigger('focus')
  expect(await axe(document.body)).toHaveNoViolations()
})
