<script lang="ts">
export interface RadioGroupItemProps extends PrimitiveProps {
  value?: string
  disabled?: boolean
  required?: boolean
}

interface RadioItemProvideValue {
  disabled: ComputedRef<boolean>
  checked: ComputedRef<boolean>
}

export const RADIO_GROUP_ITEM_INJECTION_KEY
  = Symbol() as InjectionKey<RadioItemProvideValue>
</script>

<script setup lang="ts">
import {
  type ComputedRef,
  type InjectionKey,
  computed,
  inject,
  provide,
} from 'vue'
import { RADIO_GROUP_INJECTION_KEY } from './RadioGroupRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { useArrowNavigation } from '@/shared'

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
  disabled: false,
})

const context = inject(RADIO_GROUP_INJECTION_KEY)

const disabled = computed(() => {
  return context?.disabled.value || props.disabled
})

const required = computed(() => {
  return context?.required.value || props.required
})

const checked = computed(() => {
  return context?.modelValue?.value === props.value
})

provide(RADIO_GROUP_ITEM_INJECTION_KEY, { disabled, checked })

function changeOption(value: string) {
  if (disabled.value)
    return
  context?.changeModelValue(value)
}

const { primitiveElement, currentElement } = usePrimitiveElement()

function handleKeydown(e: KeyboardEvent) {
  if (disabled.value)
    return

  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    context?.parentElement.value,
    {
      arrowKeyOptions: context?.orientation.value,
      loop: context?.loop.value,
    },
  )

  if (newSelectedElement) {
    changeOption(newSelectedElement?.getAttribute('value')!)
    context!.currentFocusedElement!.value = newSelectedElement
    newSelectedElement.focus()
  }
}

const getTabIndex = computed(() => {
  if (!context?.currentFocusedElement?.value) {
    return checked.value ? '0' : '-1'
  }
  else {
    return context?.currentFocusedElement?.value === currentElement.value
      ? '0'
      : '-1'
  }
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :type="as === 'button' ? 'button' : undefined"
    :as="as"
    role="radio"
    data-radix-vue-collection-item
    v-bind="$attrs"
    :as-child="props.asChild"
    :disabled="disabled ? true : undefined"
    :data-state="checked ? 'checked' : 'unchecked'"
    :data-disabled="disabled ? '' : undefined"
    :tabindex="getTabIndex"
    :value="props.value"
    :name="context?.name"
    @click="changeOption(props.value!)"
    @keydown="handleKeydown"
  >
    <slot />
  </Primitive>
  <input
    type="radio"
    aria-hidden="true"
    tabindex="-1"
    :value="props.value"
    :required="required"
    :disabled="disabled"
    style="
      transform: translateX(-100%);
      position: absolute;
      pointer-events: none;
      opacity: 0;
      margin: 0px;
      width: 25px;
      height: 25px;
    "
    :checked="checked"
  >
</template>
