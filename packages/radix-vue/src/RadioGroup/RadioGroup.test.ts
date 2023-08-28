import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import RadioGroup from './story/_RadioGroup.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(RadioGroup)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
