import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'
import Menu from './story/_Menu.vue'

it('should pass axe accessibility tests', async () => {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  mount(Menu, {
    attachTo: document.body,
  })
  expect(await axe(document.body)).toHaveNoViolations()
})
