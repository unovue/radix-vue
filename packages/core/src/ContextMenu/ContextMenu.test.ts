import { type VueWrapper, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import ContextMenu from './story/_ContextMenu.vue'
import { axe } from 'vitest-axe'
import { findByRole } from '@testing-library/vue'

describe('given default ContextMenu', () => {
  let wrapper: VueWrapper<InstanceType<typeof ContextMenu>>
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(ContextMenu, { attachTo: document.body })
  })

  it('should render trigger area', () => {
    expect(wrapper.html()).toContain('Right click here')
  })

  describe('when RightClick', () => {
    beforeEach(async () => {
      await wrapper.find('span').trigger('click.right')
    })

    it('should pass axe accessibility tests', async () => {
      expect(await axe(document.body)).toHaveNoViolations()
    })

    it('should render the menu', async () => {
      expect(await findByRole(document.body, 'menu')).toBeTruthy()
    })
  })
})
