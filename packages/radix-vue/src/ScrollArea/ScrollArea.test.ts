import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import ScrollArea from './story/_ScrollAreaStory.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(ScrollArea)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
