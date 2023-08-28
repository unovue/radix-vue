import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Tabs from './story/_Tabs.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Tabs)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
