import { beforeEach, describe, expect, it, vi } from 'vitest'
import { axe } from 'vitest-axe'
import Combobox from './story/_Combobox.vue'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { handleSubmit } from '@/test'

describe('given default Combobox', () => {
  let wrapper: VueWrapper<InstanceType<typeof Combobox>>
  let valueBox: DOMWrapper<HTMLElement>
  window.HTMLElement.prototype.releasePointerCapture = vi.fn()
  window.HTMLElement.prototype.hasPointerCapture = vi.fn()
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  beforeEach(() => {
    // @ts-expect-error aXe throwing error complaining getComputedStyle
    window.getComputedStyle = () => ({
      animationName: '',
    })
    document.body.innerHTML = ''
    wrapper = mount(Combobox, { attachTo: document.body })
    valueBox = wrapper.find('input')
  })

  it('should pass axe accessibility tests', async () => {
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('should show placeholder', () => {
    expect(wrapper.html()).toContain('Placeholder...')
  })

  describe('opening the popup', () => {
    beforeEach(async () => {
      await wrapper.find('button').trigger('click')
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

    it('should show the popup content', () => {
      expect(wrapper.html()).toContain('Apple')
    })

    describe('after selecting a value', () => {
      beforeEach(async () => {
        const selection = wrapper.findAll('[role=option]')[1]
        await selection.trigger('click')
      })

      it('should show value correctly', () => {
        expect((valueBox.element as HTMLInputElement).value).toBe('Banana')
      })

      it('should close the popup', () => {
        const group = wrapper.find('[role=group]')
        expect(group.exists()).toBeFalsy()
      })

      describe('after opening the modal again', () => {
        beforeEach(async () => {
          await wrapper.find('button').trigger('click')
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

describe('given a Combobox with multiple prop', async () => {
  let wrapper: VueWrapper<InstanceType<typeof Combobox>>
  let valueBox: DOMWrapper<HTMLElement>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(Combobox, { props: { multiple: true }, attachTo: document.body })
    valueBox = wrapper.find('input')
  })

  describe('opening the popup', () => {
    beforeEach(async () => {
      await wrapper.find('button').trigger('click')
      await nextTick()
    })

    it('should show the popup content', () => {
      expect(wrapper.html()).toContain('Apple')
    })

    describe('after selecting a value', () => {
      beforeEach(async () => {
        const selection = wrapper.findAll('[role=option]')[1]
        await selection.trigger('click')
      })

      it('should not show searchTerm value', () => {
        expect((valueBox.element as HTMLInputElement).value).toBe('')
      })

      it('should keep popup open', () => {
        const group = wrapper.find('[role=group]')
        expect(group.exists()).toBeTruthy()
      })
    })
  })
})

describe('given combobox in a form', async () => {
  const wrapper = mount({
    props: ['handleSubmit'],
    components: { Combobox },
    template: '<form @submit="handleSubmit"><Combobox value="true" /></form>',
  }, {
    props: { handleSubmit },
  })

  it('should have hidden input field', async () => {
    expect(wrapper.find('[type="hidden"]').exists()).toBe(true)
  })

  describe('after selecting option and clicking submit button', () => {
    beforeEach(async () => {
      await wrapper.find('button').trigger('click')
      await nextTick()
      const selection = wrapper.findAll('[role=option]')[1]
      await selection.trigger('click')
      await wrapper.find('form').trigger('submit')
    })

    it('should trigger submit once', () => {
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(handleSubmit.mock.results[0].value).toStrictEqual({ test: 'Banana' })
    })
  })

  describe('after selecting other option and click submit button again', () => {
    beforeEach(async () => {
      await wrapper.find('button').trigger('click')
      await nextTick()
      const selection = wrapper.findAll('[role=option]')[4]
      await selection.trigger('click')
      await wrapper.find('form').trigger('submit')
    })

    it('should trigger submit once', () => {
      expect(handleSubmit).toHaveBeenCalledTimes(2)
      expect(handleSubmit.mock.results[1].value).toStrictEqual({ test: 'Pineapple' })
    })
  })
})
