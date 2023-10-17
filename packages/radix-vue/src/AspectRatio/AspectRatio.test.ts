import { beforeEach, describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import { AspectRatio } from './'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'

describe('given a default AspectRatio', async () => {
  let wrapper: VueWrapper<InstanceType<typeof AspectRatio>>

  beforeEach(() => {
    wrapper = mount(AspectRatio, {
      slots: {
        default: `<img
        class="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      >`,
      },
    })
  })

  it('should pass axe accessibility tests', async () => {
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  it('should render as snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
