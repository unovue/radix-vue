import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Accordion from './story/_Accordion.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Accordion)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
