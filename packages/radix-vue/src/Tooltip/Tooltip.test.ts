import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Tooltip from './stories/_Tooltip.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Tooltip)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
