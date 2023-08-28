import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Collapsible from './story/_Collapsible.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Collapsible)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
