import { beforeEach, describe, expect, it } from 'vitest'
import ToggleGroup from './story/_ToggleGroup.vue'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'

describe('given default Toggle Group', () => {
  let wrapper: VueWrapper<InstanceType<typeof ToggleGroup>>
  let triggers: DOMWrapper<HTMLButtonElement>[]

  beforeEach(() => {
    wrapper = mount(ToggleGroup, { attachTo: document.body })
    triggers = wrapper.findAll('button')
  })

  it('should pass axe accessibility tests', async () => {
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('should have active toggle=center', () => {
    expect(triggers[0].attributes('data-active')).toBe('false')
    expect(triggers[1].attributes('data-active')).toBe('true')
    expect(triggers[2].attributes('data-active')).toBe('false')
  })

  describe('after triggering ArrowRight', () => {
    beforeEach(async () => {
      triggers[1].element.focus()
      await triggers[1].trigger('keydown', { key: 'ArrowRight' })
    })

    it('should received focus for the next toggle', () => {
      expect(triggers[2].element).toBe(document.activeElement)
    })

    describe('after toggling', () => {
      beforeEach(() => {
        triggers[2].element.click()
      })

      it('should have next active value', () => {
        expect(triggers[0].attributes('data-active')).toBe('false')
        expect(triggers[1].attributes('data-active')).toBe('false')
        expect(triggers[2].attributes('data-active')).toBe('true')
      })

      describe('after triggering ArrowRight again', () => {
        beforeEach(async () => {
          await triggers[2].trigger('keydown', { key: 'ArrowRight' })
        })

        it('should received focus for the first toggle', () => {
          expect(triggers[0].element).toBe(document.activeElement)
        })
      })
    })
  })

  describe('after triggering ArrowLeft', () => {
    beforeEach(async () => {
      triggers[1].element.focus()
      await triggers[1].trigger('keydown', { key: 'ArrowLeft' })
    })

    it('should received focus for the next toggle', () => {
      expect(triggers[0].element).toBe(document.activeElement)
    })

    describe('after toggling', () => {
      beforeEach(() => {
        triggers[0].element.click()
      })

      it('should have next active value', () => {
        expect(triggers[0].attributes('data-active')).toBe('true')
        expect(triggers[1].attributes('data-active')).toBe('false')
        expect(triggers[2].attributes('data-active')).toBe('false')
      })
    })
  })
})
