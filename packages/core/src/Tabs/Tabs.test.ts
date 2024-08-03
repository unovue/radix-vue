import { beforeEach, describe, expect, it } from 'vitest'
import Tabs from './story/_Tabs.vue'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'

describe('given default Tabs', () => {
  let wrapper: VueWrapper<InstanceType<typeof Tabs>>

  beforeEach(() => {
    wrapper = mount(Tabs, { attachTo: document.body })
    wrapper.find('button').element.focus()
  })

  it('should pass axe accessibility tests', async () => {
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('should render tab\'s content', () => {
    expect(wrapper.find('[role=tabpanel]').exists()).toBeTruthy()

    expect(wrapper.html()).toContain('Make changes')
  })

  describe('after changing tab', () => {
    beforeEach(() => {
      const trigger = wrapper.find('button')
      trigger.trigger('keydown', { key: 'ArrowRight' })
    })

    it('should focus on next tab', () => {
      const trigger = wrapper.findAll('button')[1]
      expect(trigger.element).toBe(document.activeElement)
    })

    it('should render it\'s content', () => {
      expect(wrapper.find('[role=tabpanel]').exists()).toBeTruthy()
      expect(wrapper.html()).toContain('Change your password')
    })
  })
})
