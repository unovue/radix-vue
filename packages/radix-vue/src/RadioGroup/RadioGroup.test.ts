import { beforeEach, describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import RadioGroup from './story/_RadioGroup.vue'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { fireEvent } from '@testing-library/vue'

describe('given a default RadioGroup', () => {
  let wrapper: VueWrapper<InstanceType<typeof RadioGroup>>
  let radios: DOMWrapper<HTMLElement>[]

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(RadioGroup, { attachTo: document.body })
    radios = wrapper.findAll('[role=radio]')
  })

  it('should pass axe accessibility tests', async () => {
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('should have default selected', () => {
    expect(radios[0].attributes('data-state')).toBe('checked')
  })

  it('should render icons', () => {
    expect(radios[0].find('span').exists()).toBeTruthy()
  })

  describe('on keyboard navigation', () => {
    beforeEach(async () => {
      radios[0].element.focus()
      await fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    it('should skip disabled item', () => {
      expect(radios[1].attributes('data-state')).toBe('unchecked')
      expect(radios[2].element).toBe(document.activeElement)
    })

    it('should select next item on keydown', async () => {
      expect(radios[0].attributes('data-state')).toBe('unchecked')
      expect(radios[2].attributes('data-state')).toBe('checked')
      expect(radios[2].element).toBe(document.activeElement)
    })

    describe('on arrow up', () => {
      it('should select the first item again', async () => {
        await fireEvent.keyDown(document.activeElement!, { key: 'ArrowUp' })
        await new Promise(resolve => setTimeout(resolve, 0))
        expect(radios[0].attributes('data-state')).toBe('checked')
        expect(radios[2].attributes('data-state')).toBe('unchecked')
      })
    })
  })
})
