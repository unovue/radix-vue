import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Avatar from './story/_Avatar.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Avatar)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
