import { beforeEach, describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import { mount } from '@vue/test-utils'
import Splitter from './story/_Splitter.vue'
import { nextTick } from 'vue'

// Simple a11y test for now
describe('test splitter functionalities', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('should pass axe accessibility tests', async () => {
    const wrapper = mount(Splitter)
    await nextTick()
    expect(await axe(wrapper.element, {
      rules: {
        label: { enabled: false },
      },
    })).toHaveNoViolations()
  })
})
