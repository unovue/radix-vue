import { expect, it } from 'vitest'
import { defineComponent, h } from 'vue'
import { render, screen } from '@testing-library/vue'
import Label from './Label.vue'
import { axe } from 'vitest-axe'

it('should pass axe accessibility tests', async () => {
  const wrapper = render(Label)
  expect(await axe(wrapper.baseElement)).toHaveNoViolations()
})

it('should render without crashing', async () => {
  const label = render(Label)
  expect(label.html()).toBe('<label></label>')
})

it('should render with a default slot', async () => {
  const label = render(Label, { slots: { default: 'Label' } })
  expect(label.html()).toBe('<label>Label</label>')
})

it('should render with a `for` attribute', async () => {
  const label = render(Label, { props: { for: 'input' } })
  expect(label.html()).toBe('<label for="input"></label>')
})

it('should render with a `for` attribute and a default slot', async () => {
  const label = render(Label, {
    props: { for: 'input' },
    slots: { default: 'Label' },
  })
  expect(label.html()).toBe('<label for="input">Label</label>')
})

it('should focus the input when the label is clicked', async () => {
  const { container } = render(
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h(Label, { for: 'input' }, { default: () => 'Label' }),
            h('input', { id: 'input' }),
          ])
      },
    }),
  )

  screen.getByText('Label').click()
  setTimeout(() => {
    expect(container.querySelector('input')).toBe(document.activeElement)
  }, 50)
})

it('should not focus the input when click on the label without a `for` attribute', async () => {
  const { container } = render(
    defineComponent({
      setup() {
        return () => h('div', [h(Label), h('input', { id: 'input' })])
      },
    }),
  )

  container.getElementsByTagName('label')[0].click()
  setTimeout(() => {
    expect(container.querySelector('input')).not.toBe(document.activeElement)
  }, 50)
})

it('should not focus the input when click on the label with a `for` attribute that does not match any input', async () => {
  const { container } = render(
    defineComponent({
      setup() {
        return () =>
          h('div', [h(Label, { for: 'input' }), h('input', { id: 'input2' })])
      },
    }),
  )

  container.getElementsByTagName('label')[0].click()
  setTimeout(() => {
    expect(container.querySelector('input')).not.toBe(document.activeElement)
  }, 50)
})
