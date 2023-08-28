import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Progress from './story/_Progress.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Progress)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
