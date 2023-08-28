import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import { AspectRatio } from './'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(AspectRatio, {
    slots: {
      default: `<img
      class="h-full w-full object-cover"
      src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
      alt="Landscape photograph by Tobias Tullius"
    >`,
    },
    attachTo: document.body,
  })
  expect(await axe(wrapper.element)).toHaveNoViolations()
})
