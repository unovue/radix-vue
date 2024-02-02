import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import RangeCalendar from './story/_RangeCalendar.vue'
import { mount } from '@vue/test-utils'

it('should pass axe accessibility tests', async () => {
  const wrapper = mount(RangeCalendar)
  expect(await axe(wrapper.element)).toHaveNoViolations()
})

// describe('given a default Calendar', async () => {
//   let wrapper: VueWrapper<InstanceType<typeof RangeCalendar>>
//   beforeAll(async () => {
//     wrapper = mount(RangeCalendar)
//   })
// })

// describe('given an Avatar with fallback and delayed render', () => {
//   let wrapper: VueWrapper<InstanceType<typeof Avatar>>

//   beforeAll(async () => {
//     (window.Image as any) = class MockImage {
//       onload: () => void = () => {}
//       src = ''
//       constructor() {
//         setTimeout(() => {
//           this.onload()
//         }, DELAY)
//         return this
//       }
//     }
//     wrapper = mount(Avatar, {
//       props: {
//         delay: 300,
//       },
//     })
//   })

//   it('should not render a fallback immediately', async () => {
//     expect(wrapper.text()).not.toContain(FALLBACK)
//   })

//   it('should render a fallback after the delay', async () => {
//     expect(wrapper.text()).not.toContain(FALLBACK)
//     const fallback = await findByText(wrapper.element as HTMLElement, FALLBACK)
//     expect(wrapper.element).not.toContain(fallback)
//   })
// })
