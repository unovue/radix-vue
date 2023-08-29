import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import HoverCard from './story/_HoverCard.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  const wrapper = mount(HoverCard, { attachTo: document.body })
  expect(await axe(wrapper.element)).toHaveNoViolations()

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  await wrapper.find('a').trigger('mouseenter')
  await sleep(100)
  expect(await axe(document.body)).toHaveNoViolations()
})
