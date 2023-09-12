<script setup lang="ts">
import { inject } from 'vue'
import SelectContentImpl, {
  type SelectContentImplEmits,
  type SelectContentImplProps,
} from './SelectContentImpl.vue'
import { SELECT_INJECTION_KEY } from './SelectRoot.vue'
import { Presence } from '@/Presence'
import { useEmitAsProps } from '@/shared'
import { PopperContentPropsDefaultValue } from '@/Popper'

export interface SelectContentProps extends SelectContentImplProps {}
export type SelectContentEmits = SelectContentImplEmits

const props = withDefaults(defineProps<SelectContentProps>(), {
  ...PopperContentPropsDefaultValue,
  align: 'start',
  position: 'item-aligned',
})

const emits = defineEmits<SelectContentEmits>()

const context = inject(SELECT_INJECTION_KEY)

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <Presence :present="context!.open.value">
    <SelectContentImpl v-bind="{ ...props, ...emitsAsProps }">
      <slot />
    </SelectContentImpl>
  </Presence>
</template>
