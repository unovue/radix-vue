import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Select from './story/_Select.vue'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Select, { attachTo: document.body })
  expect(await axe(wrapper.element)).toHaveNoViolations()

  // open modal
  wrapper.find('button').element.click()
  await nextTick()
  expect(await axe(document.body)).toHaveNoViolations()
})
