import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import { Toggle } from './'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Toggle, {
    attrs: { 'aria-label': 'Toggle italic' },
  })
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
