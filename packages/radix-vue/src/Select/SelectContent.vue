<script setup lang="ts">
import SelectContentImpl, {
  type SelectContentImplEmits,
  type SelectContentImplProps,
} from './SelectContentImpl.vue'
import { injectSelectContext } from './SelectRoot.vue'
import { Presence } from '@/Presence'
import { useEmitAsProps } from '@/shared'

export interface SelectContentProps extends SelectContentImplProps {}
export type SelectContentEmits = SelectContentImplEmits

const props = defineProps<SelectContentProps>()

const emits = defineEmits<SelectContentEmits>()

const context = injectSelectContext()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <Presence :present="context.open.value">
    <SelectContentImpl v-bind="{ ...props, ...emitsAsProps }">
      <slot />
    </SelectContentImpl>
  </Presence>
</template>
