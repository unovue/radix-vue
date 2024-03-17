import { useVModel } from '@vueuse/core'
import { type Ref, computed, ref, watch } from 'vue'
import type { SingleOrMultipleProps } from './types'

/**
 * Validates the props and it makes sure that the types are coherent with each other
 *
 * 1. If type, defaultValue, and modelValue are all undefined, throw an error.
 * 2. If modelValue and defaultValue are defined and not of the same type, throw an error.
 * 3. If type is defined:
 *    a. If type is 'single' and either modelValue or defaultValue is an array, log an error and return 'multiple'.
 *    b. If type is 'multiple' and neither modelValue nor defaultValue is an array, log an error and return 'single'.
 * 4. Return 'multiple' if modelValue is an array, else return 'single'.
 */
function validateProps({ type, defaultValue, modelValue }: SingleOrMultipleProps) {
  // One of the three must be defined
  if (!type && !modelValue && !defaultValue)
    throw new Error('Either the `type` or the `value` or `default-value` prop must be defined.')

  if (modelValue !== undefined && defaultValue !== undefined && typeof modelValue !== typeof defaultValue) {
    throw new Error(
        `Invalid prop \`value\` of value \`${modelValue}\` supplied to \`AccordionRoot\`, should be the same type as the \`defaultValue\` prop, which is \`${defaultValue}\`. The \`value\` prop must be:
  ${type === 'single' ? '- a string' : type === 'multiple' ? '- an array of strings' : '- a string\n- an array of strings'}
  - \`undefined\``)
  }

  const canTypeBeInferred = modelValue !== undefined || defaultValue !== undefined
  // Ensure the type matches the provided values
  if (type && canTypeBeInferred) {
    const isArray = Array.isArray(modelValue) || Array.isArray(defaultValue)
    const propUsed = modelValue !== undefined ? 'modelValue' : 'defaultValue'
    const typeUsed = propUsed === 'modelValue' ? typeof modelValue : typeof defaultValue
    if (type === 'single' && isArray) {
      console.error(`Invalid prop \`${propUsed}\` of type ${typeUsed} supplied to \`AccordionRoot\` with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
You can remove the \`type\` prop to let the component infer the type from the ${propUsed} prop.`)
      return 'multiple'
    }
    else if (type === 'multiple' && !isArray) {
      console.error(`Invalid prop \`${propUsed}\` of type ${typeUsed} supplied to \`AccordionRoot\` with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${propUsed} prop.`)
      return 'single'
    }
  }

  if (canTypeBeInferred)
    return Array.isArray(modelValue) ? 'multiple' : 'single'
  else
    return type
}

function getDefaultType({ type, defaultValue, modelValue }: SingleOrMultipleProps) {
  if (type)
    return type

  return validateProps({ type, defaultValue, modelValue })
}

function getDefaultValue({ type, defaultValue }: SingleOrMultipleProps, modelValue: undefined | string | string[]) {
  if (defaultValue !== undefined)
    return defaultValue

  if (modelValue !== undefined)
    return modelValue

  return (type === 'single') ? undefined : []
}

export function useSingleOrMultipleValue<P extends SingleOrMultipleProps, Name extends string>(
  props: P,
  emits: (name: Name, ...args: any[]) => void,
) {
  const type = ref(getDefaultType(props))
  const modelValue = useVModel(props, 'modelValue', emits, {
    defaultValue: getDefaultValue(props, props.modelValue),
    passive: (props.modelValue === undefined) as false,
  }) as Ref<string | string[] | undefined>

  watch(
    () => [props.type, props.modelValue],
    () => {
      const validatedType = validateProps(props)
      if (type.value !== validatedType)
        type.value = validatedType
    },
    { immediate: true },
  )

  function changeModelValue(value: string) {
    if (type.value === 'single') {
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

  const isSingle = computed(() => type.value === 'single')

  return {
    modelValue,
    type,
    changeModelValue,
    isSingle,
  }
}
