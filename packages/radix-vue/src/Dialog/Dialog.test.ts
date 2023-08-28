import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Dialog from './story/_Dialog.vue'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(Dialog, { attachTo: document.body })
  expect(await axe(document.body)).toHaveNoViolations()

  // open modal
  wrapper.find('button').element.click()
  await nextTick()
  expect(await axe(document.body)).toHaveNoViolations()
})
