import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Popover from './story/_Popover.vue'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

it('should pass axe accessibility tests', async () => {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  const wrapper = mount(Popover, { attachTo: document.body })
  expect(await axe(wrapper.element)).toHaveNoViolations()

  // open modal
  wrapper.find('button').element.click()
  await nextTick()
  expect(await axe(document.body, {
    rules: {
      // we dont check for dialog-name when using Popover
      'aria-dialog-name': {
        enabled: false,
      },
    },
  })).toHaveNoViolations()
})
