import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import NavigationMenu from './story/_NavigationMenu.vue'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(NavigationMenu, { attachTo: document.body })
  expect(await axe(wrapper.element)).toHaveNoViolations()

  // open modal
  wrapper.find('button').element.click()
  await nextTick()
  expect(await axe(document.body)).toHaveNoViolations()
})
