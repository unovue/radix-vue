<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { Ref } from 'vue'
import { createContext, useForwardExpose, useId } from '@/shared'

export interface CollapsibleRootProps extends PrimitiveProps {
  defaultOpen?: boolean
  open?: boolean
  disabled?: boolean
}

export type CollapsibleRootEmits = {
  'update:open': [value: boolean]
}

interface CollapsibleRootContext {
  contentId: string
  disabled?: Ref<boolean>
  open: Ref<boolean>
  onOpenToggle(): void
}

export const [injectCollapsibleRootContext, provideCollapsibleRootContext]
  = createContext<CollapsibleRootContext>('CollapsibleRoot')
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<CollapsibleRootProps>(), {
  open: undefined,
  defaultOpen: false,
})

const emit = defineEmits<CollapsibleRootEmits>()

useForwardExpose()

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

const disabled = useVModel(props, 'disabled')

provideCollapsibleRootContext({
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
