import { expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import Editable from './story/_Editable.vue'
import userEvent from '@testing-library/user-event'
import type { EditableRootProps } from './EditableRoot.vue'
import { render } from '@testing-library/vue'

// const kbd = useTestKbd()

function setup(props: { editableProps?: EditableRootProps; emits?: { 'onUpdate:modelValue'?: (data: string) => void } } = {}) {
  const user = userEvent.setup()
  const returned = render(Editable, { props })
  const editable = returned.getByTestId('root')
  expect(editable).toBeVisible()
  return { ...returned, user, root: editable }
}

it('should pass axe accessibility tests', async () => {
  const { root } = setup()
  expect(await axe(root)).toHaveNoViolations()
})
