import { beforeEach, describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import TagsInput from './story/_TagsInput.vue'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'

describe('given default TagsInput', () => {
  // @ts-expect-error we return empty object
  window.getComputedStyle = () => ({})
  let wrapper: VueWrapper<InstanceType<typeof TagsInput>>
  let input: DOMWrapper<HTMLInputElement>
  let tags: DOMWrapper<HTMLElement>[]

  beforeEach(() => {
    wrapper = mount(TagsInput, { attachTo: document.body })
    tags = wrapper.findAll('[data-radix-vue-collection-item]')
  })

  it('should pass axe accessibility tests', async () => {
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('should render the initial tags', () => {
    expect(tags[0].html()).contains('Test')
  })

  const addTag = async (text: string) => {
    await input.setValue(text)
    await input.trigger('keydown.enter')
    tags = wrapper.findAll('[data-radix-vue-collection-item]')
  }

  describe('after adding new value', async () => {
    beforeEach(async () => {
      input = wrapper.find('input')
      input.element.focus()
      await addTag('123')
      await addTag('Asd')
    })

    it('should add a new tag', () => {
      expect(wrapper.html()).contains('123')
      expect(tags[1].html()).contains('123')
    })

    it('should have focus on input', () => {
      expect(input.element).toBe(document.activeElement)
    })

    it('should clear off the value in input', () => {
      expect(input.element.value).toBe('')
    })

    describe('after pressing on ArrowLeft on input', () => {
      beforeEach(async () => {
        await input.trigger('keydown', {
          key: 'ArrowLeft',
        })
      })

      it('should select the last tags', () => {
        expect(tags[tags.length - 1].attributes('data-state')).toBe('active')
      })

      it('should select the previous tag when press ArrowLeft', async () => {
        await input.trigger('keydown', {
          key: 'ArrowLeft',
        })
        expect(tags[tags.length - 1].attributes('data-state')).toBe('inactive')
        expect(tags[tags.length - 2].attributes('data-state')).toBe('active')
      })

      it('should select the first item when press Home', async () => {
        await input.trigger('keydown', {
          key: 'Home',
        })
        expect(tags[0].attributes('data-state')).toBe('active')
        expect(tags[tags.length - 1].attributes('data-state')).toBe('inactive')
      })

      it('should select the last item when press End', async () => {
        await input.trigger('keydown', {
          key: 'Home',
        })
        await input.trigger('keydown', {
          key: 'End',
        })
        expect(tags[0].attributes('data-state')).toBe('inactive')
        expect(tags[tags.length - 1].attributes('data-state')).toBe('active')
      })

      it('should remove active state when press ArrowRight', async () => {
        await input.trigger('keydown', {
          key: 'ArrowRight',
        })
        expect(tags[tags.length - 1].attributes('data-state')).toBe('inactive')
      })

      describe('after pressing on Backspace', () => {
        let prevTag: DOMWrapper<HTMLElement>
        beforeEach(async () => {
          prevTag = wrapper.find('[data-state="active"]')
          await input.trigger('keydown', {
            key: 'Backspace',
          })
          tags = wrapper.findAll('[data-radix-vue-collection-item]')
        })

        it('should remove the active tag', () => {
          expect(wrapper.element.contains(prevTag.element)).toBe(false)
          expect(tags.length).toBe(2)
        })

        it('should select the new last tag', () => {
          expect(tags[tags.length - 1].attributes('data-state')).toBe('active')
        })
      })
    })
  })

  describe('adding values on user actions', () => {
    const setValueInInput = (value: string) => {
      input = wrapper.find('input')
      input.element.focus()
      return input.setValue(value)
    }

    it('should add value on keydown:enter', async () => {
      const tag = 'tag:enter'

      await setValueInInput(tag)

      await input.trigger('keydown.enter')

      tags = wrapper.findAll('[data-radix-vue-collection-item]')

      expect(wrapper.html()).toContain(tag)
      expect(tags[1].text()).toBe(tag)
    })

    it('should add value on keydown:tab', async () => {
      const tag = 'tag:tab'
      await wrapper.setProps({ addOnTab: true })
      await setValueInInput(tag)

      await input.trigger('keydown.tab')

      tags = wrapper.findAll('[data-radix-vue-collection-item]')

      expect(wrapper.html()).toContain(tag)
      expect(tags[1].text()).toBe(tag)
    })

    it('should add value on blur', async () => {
      const tag = 'tag:blur'
      await wrapper.setProps({ addOnBlur: true })
      await setValueInInput(tag)

      await input.trigger('blur')

      tags = wrapper.findAll('[data-radix-vue-collection-item]')

      expect(wrapper.html()).toContain(tag)
      expect(tags[1].text()).toBe(tag)
    })
  })
})
