import { expect, it } from 'vitest'
import Toolbar from './story/_Toolbar.vue'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Toolbar)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
