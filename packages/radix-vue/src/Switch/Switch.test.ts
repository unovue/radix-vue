import { fireEvent, render, screen } from '@testing-library/vue'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { axe } from 'vitest-axe'
import { mount } from '@vue/test-utils'
import Switch from './_Switch.vue'

describe('test switch functionalities', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('should pass axe accessibility tests', async () => {
    const wrapper = mount(Switch)
    expect(await axe(wrapper.element, {
      rules: {
        label: { enabled: false },
      },
    })).toHaveNoViolations()
  })

  test('thumb can render', async () => {
    render(Switch)
    screen.getByTestId('thumb')
  })

  test('clicking thumb will toggle value', async () => {
    const { container } = render(Switch)
    const root = container.querySelector('button')!
    screen.getByText('unchecked')

    await fireEvent.click(root)
    screen.getByText('checked')

    await fireEvent.click(root)
    screen.getByText('unchecked')
  })

  test('keydown enter root will toggle value', async () => {
    const { container } = render(Switch)
    const button = container.querySelector('button')!
    screen.getByText('unchecked')

    await fireEvent.keyDown(button, { key: 'Enter' })
    screen.getByText('checked')

    await fireEvent.keyDown(button, { key: 'Enter' })
    screen.getByText('unchecked')
  })
})
