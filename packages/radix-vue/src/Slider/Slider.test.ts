import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Slider from './story/_Slider.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  const wrapper = mount(Slider)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
