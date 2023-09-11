import { useVModel } from '@vueuse/core'
import { type Ref, watch } from 'vue'
import type { Type } from './types'

function validateModelValue(
  type: Type,
  modelValue?: string | string[] | undefined,
) {
  if (type === 'single') {
    if (Array.isArray(modelValue)) {
      console.error(`Invalid prop \`value\` of value \`${modelValue}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`value\` prop must be:
  - a string
  - \`undefined\`

If you want to use multiple values, use the \`AccordionRoot\` with type \`multiple\`.

Defaulting to \`undefined\`.`)
      return undefined
    }
  }
  else if (type === 'multiple') {
    if (typeof modelValue === 'string' || typeof modelValue === 'undefined') {
      console.error(`Invalid prop \`value\` of value \`${modelValue}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`value\` prop must be:
- an array of strings
- empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`)
      return []
    }
  }
  return modelValue
}

function getDefaultValue({ type, defaultValue }: Props) {
  if (type === 'multiple') {
    if (Array.isArray(defaultValue)) {
      return defaultValue
    }
    else if (defaultValue === undefined) {
      return []
    }
    else {
      console.error(
        `Invalid prop \`defaultValue\` of value \`${defaultValue}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`defaultValue\` prop must be:
  - an array of strings
  - empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`,
      )
      return []
    }
  }
  else if (type === 'single') {
    if (typeof defaultValue === 'string') {
      return defaultValue
    }
    else if (defaultValue === undefined) {
      return undefined
    }
    else {
      console.error(
        `Invalid prop \`defaultValue\` of value \`${defaultValue}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`defaultValue\` prop must be:
  - a string
  - \`undefined\`

Defaulting to \`undefined\`.`,
      )
      return undefined
    }
  }
}

interface Props {
  modelValue?: string | string[]
  type: Type
  defaultValue?: string | string[]
}
export function useSingleOrMultipleValue<P extends Props, Name extends string>(
  props: P,
  emits: (name: Name, ...args: any[]) => void,
) {
  const modelValue = useVModel(props, 'modelValue', emits, {
    defaultValue: getDefaultValue(props),
    passive: true,
  }) as Ref<string | string[] | undefined>

  watch(
    () => [props.type, props.modelValue],
    () => {
      const validatedValue = validateModelValue(props.type, modelValue.value)
      if (modelValue.value !== validatedValue)
        modelValue.value = validatedValue
    },
    { immediate: true },
  )

  function changeModelValue(value: string) {
    if (props.type === 'single') {
      modelValue.value = value === modelValue.value ? undefined : value
    }
    else {
      const modelValueArray = (modelValue.value as string[]) || []
      if (modelValueArray.includes(value)) {
        const index = modelValueArray.findIndex(i => i === value)
        modelValueArray.splice(index, 1)
      }
      else {
        modelValueArray.push(value)
      }
      modelValue.value = modelValueArray
      // manually emits this type: multiple as it it an array and passive: true makes it not triggering emits
      emits('update:modelValue' as Name, modelValue.value)
    }
  }

  return {
    modelValue,
    changeModelValue,
  }
}
