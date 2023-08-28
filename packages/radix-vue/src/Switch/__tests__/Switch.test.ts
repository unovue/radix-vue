import { fireEvent, render, screen } from '@testing-library/vue'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { axe } from 'vitest-axe'
import { mount } from '@vue/test-utils'
import Switch1 from './Switch1.vue'

describe('test switch functionalities', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('should pass axe accessibility tests', async () => {
    const wrapper = mount(Switch1)
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('thumb can render', async () => {
    render(Switch1)
    screen.getByTestId('thumb')
  })

  test('clicking thumb will toggle value', async () => {
    const { container } = render(Switch1)
    const root = container.querySelector('button')!
    screen.getByText('unchecked')

    await fireEvent.click(root)
    screen.getByText('checked')

    await fireEvent.click(root)
    screen.getByText('unchecked')
  })

  test('keydown enter root will toggle value', async () => {
    const { container } = render(Switch1)
    const button = container.querySelector('button')!
    screen.getByText('unchecked')

    await fireEvent.keyDown(button, { key: 'Enter' })
    screen.getByText('checked')

    await fireEvent.keyDown(button, { key: 'Enter' })
    screen.getByText('unchecked')
  })
  /*
  test("keydown space root will toggle value", async () => {
    const { container } = render(Switch1);
    const input = container.querySelector("input")!;
    screen.getByText("unchecked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("checked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("unchecked");
  });

  test("root has data state & reactive", async () => {
    const { container } = render(Switch1);
    const root = container.querySelector("input")!;
    const input = container.querySelector("input")!;
    screen.getByText("unchecked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("checked");
    expect(root.dataset.state).toBe("checked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("unchecked");
    expect(root.dataset.state).toBe("unchecked");
  });

  */
})
