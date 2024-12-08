import { expect, it } from 'vitest'
import Arrow from './Arrow.vue'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Arrow)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
