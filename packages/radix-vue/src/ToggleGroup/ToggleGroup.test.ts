import { expect, it } from 'vitest'
import ToggleGroup from './story/_ToggleGroup.vue'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(ToggleGroup)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
