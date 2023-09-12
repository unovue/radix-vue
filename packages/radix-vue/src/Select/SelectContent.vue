<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import SelectContentImpl, {
  type SelectContentImplEmits,
  type SelectContentImplProps,
} from './SelectContentImpl.vue'
import { SELECT_INJECTION_KEY } from './SelectRoot.vue'
import { Presence } from '@/Presence'
import { omit, useEmitAsProps } from '@/shared'
import { PopperContentPropsDefaultValue } from '@/Popper'
import SelectProvider from './SelectProvider.vue'

export interface SelectContentProps extends SelectContentImplProps {}
export type SelectContentEmits = SelectContentImplEmits

const props = withDefaults(defineProps<SelectContentProps>(), {
  ...omit(PopperContentPropsDefaultValue, 'updatePositionStrategy', 'prioritizePosition'),
  align: 'start',
  position: 'item-aligned',
})
const emits = defineEmits<SelectContentEmits>()
const emitsAsProps = useEmitAsProps(emits)

const context = inject(SELECT_INJECTION_KEY)

const fragment = ref<DocumentFragment>()
onMounted(() => {
  fragment.value = new DocumentFragment()
})

const presenceRef = ref<InstanceType<typeof Presence>>()
</script>

<template>
  <Presence ref="presenceRef" :present="context!.open.value">
    <SelectContentImpl v-bind="{ ...props, ...emitsAsProps, ...$attrs }">
      <slot />
    </SelectContentImpl>
  </Presence>

  <Teleport v-if="!presenceRef?.present && fragment" :to="fragment">
    <SelectProvider :context="context!">
      <div>
        <slot />
      </div>
    </SelectProvider>
  </Teleport>
</template>
