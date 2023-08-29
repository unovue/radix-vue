import { describe, expect, it } from 'vitest'
import Checkbox from './story/_Checkbox.vue'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'

describe('test checkbox functionalities', () => {
  it('should pass axe accessibility tests', async () => {
    const wrapper = mount(Checkbox, { attachTo: document.body })
    expect(await axe(wrapper.element, {
      rules: {
        label: { enabled: false },
      },
    })).toHaveNoViolations()
  })

  it('should render checkbox', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.element).toBeTruthy()
  })
})
