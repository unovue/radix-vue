import { describe, expect, it, vi } from 'vitest'
import { useSingleOrMultipleValue } from './useSingleOrMultipleValue'
import type { SingleOrMultipleProps } from './types'
import { reactive } from 'vue'

function setupPropsEmits(defaultProps: SingleOrMultipleProps) {
  const props = reactive(defaultProps)
  const emits = (emitName: string, ...args: any[]) => {
    if (emitName === 'update:modelValue')
      props.modelValue = args[0]
  }
  return { props, emits }
}

describe('useSingleOrMultipleValue', () => {
  it('should initialize with correct type and modelValue', () => {
    const props: SingleOrMultipleProps = {
      type: 'single',
      modelValue: 'test',
    }
    const emits = vi.fn()
    const { type, modelValue } = useSingleOrMultipleValue(props, emits)

    expect(type.value).toBe('single')
    expect(modelValue.value).toBe('test')
  })

  it('should change modelValue for single type', async () => {
    const { props, emits } = setupPropsEmits({
      type: 'single',
      modelValue: 'test',
    })
    const { changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toBe('newTest')

    changeModelValue('newTest')
    expect(modelValue.value).toBeUndefined()
  })

  it('should change modelValue for multiple type', () => {
    const { props, emits } = setupPropsEmits({
      type: 'multiple',
      modelValue: ['test'],
    })
    const { changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toEqual(['test', 'newTest'])

    changeModelValue('test')
    expect(modelValue.value).toEqual(['newTest'])
  })

  it('should infer type from modelValue given `single`', () => {
    const { props, emits } = setupPropsEmits({
      modelValue: 'test',
    })
    const { type, changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toEqual('newTest')

    changeModelValue('')
    expect(modelValue.value).toEqual('')
    expect(type.value).toBe('single')
  })

  it('should infer type from modelValue given `multiple`', () => {
    const { props, emits } = setupPropsEmits({
      modelValue: ['test'],
    })
    const { type, changeModelValue, modelValue } = useSingleOrMultipleValue(props, emits)

    changeModelValue('newTest')
    expect(modelValue.value).toEqual(['test', 'newTest'])

    changeModelValue('test')
    expect(modelValue.value).toEqual(['newTest'])
    expect(type.value).toBe('multiple')
  })

  it('should validate props and throw error if invalid given type `single`', () => {
    const consoleErrorMockFunction = vi.fn()
    vi.spyOn(console, 'error').mockImplementation(consoleErrorMockFunction)

    const props: SingleOrMultipleProps = reactive({
      type: 'single',
      modelValue: ['test'],
    })
    const emits = vi.fn()

    useSingleOrMultipleValue(props, emits)
    expect(consoleErrorMockFunction).toHaveBeenCalledTimes(1)
    expect(consoleErrorMockFunction).toHaveBeenCalledWith(expect.stringMatching(/Invalid prop `modelValue` of type object supplied with type `single`/))
  })

  it('should validate props and throw error if invalid given type `multiple`', () => {
    const consoleErrorMockFunction = vi.fn()
    vi.spyOn(console, 'error').mockImplementation(consoleErrorMockFunction)

    const props: SingleOrMultipleProps = reactive({
      type: 'multiple',
      modelValue: 'test',
    })
    const emits = vi.fn()

    useSingleOrMultipleValue(props, emits)
    expect(consoleErrorMockFunction).toHaveBeenCalledTimes(1)
    expect(consoleErrorMockFunction).toHaveBeenCalledWith(expect.stringMatching(/Invalid prop `modelValue` of type string supplied with type `multiple`/))
  })
})
