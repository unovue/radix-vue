import { beforeEach, describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'
import Slider from './story/_Slider.vue'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'

describe('given default Slider', () => {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
  window.HTMLElement.prototype.hasPointerCapture = vi.fn()
  window.HTMLElement.prototype.releasePointerCapture = vi.fn()
  window.HTMLElement.prototype.setPointerCapture = vi.fn()

  let wrapper: VueWrapper<InstanceType<typeof Slider>>

  beforeEach(() => {
    wrapper = mount(Slider)
  })

  it('should pass axe accessibility tests', async () => {
    wrapper = mount(Slider)
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('should have defalt value', () => {
    expect(wrapper.html()).toContain('aria-valuenow="50"')
  })

  // TODO: Properly test dragging event
  // describe('after dragging the handler', () => {
  //   beforeEach(async () => {
  //     const trigger = wrapper.find('[role=slider]')
  //     await fireEvent.pointerDown(trigger.element)
  //     await fireEvent.pointerMove(trigger.element, {
  //       x: 10,
  //     })

  //     // await trigger.trigger('pointerdown')
  //     // await trigger.trigger('pointermove', {
  //     //   x: 10,
  //     // })
  //   })

  //   it('should do something', () => {
  //     console.log('hi', wrapper.html())
  //   })
  // })
})
