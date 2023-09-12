import { beforeEach, describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'
import Select from './story/_SelectTest.vue'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { fireEvent } from '@testing-library/vue'

describe('given default Select', () => {
  let wrapper: VueWrapper<InstanceType<typeof Select>>
  let valueBox: DOMWrapper<HTMLElement>
  window.HTMLElement.prototype.releasePointerCapture = vi.fn()
  window.HTMLElement.prototype.hasPointerCapture = vi.fn()
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(Select, { attachTo: document.body })
    valueBox = wrapper.find('[aria-label="Customise options"]')
  })

  it('should pass axe accessibility tests', async () => {
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('should show placeholder', () => {
    expect(valueBox.html()).toContain('Please select a fruit')
  })

  describe('opening the modal', () => {
    beforeEach(async () => {
      await wrapper.find('button').trigger('pointerdown', {
        button: 0,
        ctrlKey: false,
      })
      await nextTick()
    })

    it('should pass axe accessibility tests', async () => {
      // We have hidden children such as icon, thus disabling this
      expect(await axe(wrapper.element, {
        rules: {
          'aria-required-children': { enabled: false },
        },
      })).toHaveNoViolations()
    })

    it('should show the modal content', () => {
      expect(wrapper.html()).toContain('Apple')
    })

    describe('after selecting a value', () => {
      beforeEach(async () => {
        const selection = wrapper.findAll('[role=option]')[1];
        (selection.element as HTMLElement).focus()
        await selection.trigger('pointerup')
        // not sure why need 2 pointUp to trigger the selection correctly
        await fireEvent.pointerUp(selection.element)
      })

      it('should show value correctly', () => {
        expect(valueBox.html()).toContain('Banana')
      })

      it('should close the modal', () => {
        const group = wrapper.find('[role=group]')
        expect(group.exists()).toBeFalsy()
      })

      describe('after opening the modal again', () => {
        beforeEach(async () => {
          await wrapper.find('button').trigger('pointerdown', {
            button: 0,
            ctrlKey: false,
          })
          await nextTick()
        })

        it('should focus on the selected value', () => {
          const selection = wrapper.findAll('[role=option]')[1]
          expect(selection.attributes('data-state')).toBe('checked')
        })

        it('should render the icon', () => {
          const selection = wrapper.findAll('[role=option]')[1]
          expect(selection.html()).toContain('svg')
        })
      })
    })
  })
})
