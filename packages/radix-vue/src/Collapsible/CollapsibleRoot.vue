<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import { useId } from '@/shared'

export interface CollapsibleRootProps extends PrimitiveProps {
  defaultOpen?: boolean
  open?: boolean
  disabled?: boolean
}

export type CollapsibleRootEmits = {
  'update:open': [value: boolean]
}

interface CollapsibleProvideValue {
  contentId: string
  disabled?: Ref<boolean>
  open: Ref<boolean>
  onOpenToggle(): void
}

export const COLLAPSIBLE_INJECTION_KEY
  = Symbol() as InjectionKey<CollapsibleProvideValue>
</script>

<script setup lang="ts">
import { provide } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<CollapsibleRootProps>(), {
  open: undefined,
  defaultOpen: false,
})

const emit = defineEmits<CollapsibleRootEmits>()

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
})

const disabled = useVModel(props, 'disabled')

provide(COLLAPSIBLE_INJECTION_KEY, {
  contentId: useId(),
  disabled,
  open,
  onOpenToggle: () => {
    open.value = !open.value
  },
})

defineExpose({ open })
</script>

<template>
  <Primitive
    :as="as"
    :as-child="props.asChild"
    :data-state="props.open ? 'open' : 'closed'"
    :data-disabled="props.disabled ? '' : undefined"
  >
    <slot :open="open" />
  </Primitive>
</template>
