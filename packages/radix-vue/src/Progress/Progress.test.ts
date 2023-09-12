import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Progress from './story/_Progress.vue'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'

describe('given a default Progress', () => {
  let wrapper: VueWrapper<InstanceType<typeof Progress>>

  it('should pass axe accessibility tests', async () => {
    wrapper = mount(Progress)
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('shoud contain correct value', () => {
    expect(wrapper.html()).toContain('data-value="0"')
  })

  describe('after 200ms', () => {
    it('shoud contain correct value', async () => {
      await new Promise(resolve => setTimeout(resolve, 200))
      expect(wrapper.html()).toContain('data-value="50"')
    })
  })
})
