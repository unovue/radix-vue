import { beforeEach, describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { findByText } from '@testing-library/vue'
import Collapsible from './story/_Collapsible.vue'

const CONTENT_TEXT = 'Content'

describe('given a default Collapsible', async () => {
  let wrapper: VueWrapper<InstanceType<typeof Collapsible>>
  let trigger: DOMWrapper<HTMLButtonElement>
  beforeEach(() => {
    wrapper = mount(Collapsible)
    trigger = wrapper.find('button')
  })
  it('should pass axe accessibility tests', async () => {
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  describe('when clicking the trigger', async () => {
    let content: HTMLElement
    beforeEach(async () => {
      await trigger.trigger('click')
      content = await findByText(wrapper.element as HTMLElement, CONTENT_TEXT)
    })

    it('should open the content', async () => {
      expect(wrapper.text()).toContain(content.innerHTML)
    })

    describe('and clicking the trigger again', () => {
      beforeEach(() => {
        trigger.trigger('click')
      })

      it('should close the content', () => {
        expect(wrapper.text()).not.toContain(content.innerHTML)
      })
    })
  })
})

describe('given an open uncontrolled Collapsible', () => {
  let content: HTMLElement
  describe('when clicking the trigger', async () => {
    let wrapper: VueWrapper<InstanceType<typeof Collapsible>>
    beforeEach(async () => {
      wrapper = mount(Collapsible, {
        props: {
          defaultOpen: true,
        },
      })
      content = await findByText(wrapper.element as HTMLElement, CONTENT_TEXT)
    })

    it('should open the content by default', () => {
      expect(wrapper.text()).toContain(content.innerHTML)
    })

    it('should close the content', async () => {
      const trigger = wrapper.find('button')
      await trigger.trigger('click')
      expect(wrapper.text()).not.toContain(content.innerHTML)
    })

    it('should call `update:open` prop with `false` value', () => {
      wrapper.vm.$emit('update:open', false)
      expect(wrapper.emitted('update:open')?.[0]?.[0]).toBe(false)
    })
  })
})
