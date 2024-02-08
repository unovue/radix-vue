import { beforeEach, describe, expect, it } from 'vitest'
import DismissableLayer from './story/_DismissableLayer.vue'
import { type DOMWrapper, type VueWrapper, mount } from '@vue/test-utils'
import { fireEvent } from '@testing-library/vue'

const OPEN_LABEL = 'Open'
const CLOSE_LABEL = 'Close'
const OUTSIDE_LABEL = 'Outside'

describe('given a default DismissableLayer', () => {
  let wrapper: VueWrapper<InstanceType<typeof DismissableLayer>>
  let trigger: DOMWrapper<HTMLElement>

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(DismissableLayer, { attachTo: document.body, props: { openLabel: OPEN_LABEL, closeLabel: CLOSE_LABEL, outsideLabel: OUTSIDE_LABEL } })
    trigger = wrapper.find('button')
  })

  it('should render button without content', async () => {
    expect(document.body.innerHTML).not.toContain(CLOSE_LABEL)
  })

  describe('after clicking a trigger', () => {
    let outsideButton: DOMWrapper<HTMLButtonElement>
    beforeEach(async () => {
      await fireEvent.click(trigger.element)
      const buttons = wrapper.findAll('button')
      buttons.find(i => i.text() === CLOSE_LABEL)?.element.focus()
      outsideButton = buttons.find(i => i.text() === OUTSIDE_LABEL)!
    })

    it('should render the content', () => {
      expect(document.body.innerHTML).toContain(CLOSE_LABEL)
    })

    describe('pressing Escape close off the layer', () => {
      it('should close layer when point click outside', async () => {
        const layer = wrapper.findComponent('#layer') as VueWrapper
        await fireEvent.keyDown(document.body, { key: 'Escape' })
        expect(document.body.innerHTML).not.toContain(CLOSE_LABEL)
        expect(layer.emitted('escapeKeyDown')?.length).toBe(1)
        expect(layer.emitted('dismiss')?.length).toBe(1)
      })
    })

    // TODO: Test clicking outside/focusing out
    // describe('clicking outside close off the layer', () => {
    //   it('should close layer when point click outside', async () => {
    //     await fireEvent.keyDown(document.body, { key: 'Escape' })
    //     expect(document.body.innerHTML).not.toContain(CLOSE_LABEL)
    //   })
    // })
  })
})
