<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SelectContentImpl, {
  type SelectContentImplEmits,
  type SelectContentImplProps,
} from './SelectContentImpl.vue'
import { injectSelectRootContext } from './SelectRoot.vue'
import { Presence } from '@/Presence'
import { useForwardPropsEmits } from '@/shared'
import SelectProvider from './SelectProvider.vue'

export interface SelectContentProps extends SelectContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
export type SelectContentEmits = SelectContentImplEmits

const props = withDefaults(defineProps<SelectContentProps>(), {
  align: 'start',
  position: 'item-aligned',
})
const emits = defineEmits<SelectContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const rootContext = injectSelectRootContext()

const fragment = ref<DocumentFragment>()
onMounted(() => {
  fragment.value = new DocumentFragment()
})

const presenceRef = ref<InstanceType<typeof Presence>>()
</script>

<template>
  <Presence ref="presenceRef" :present="forceMount || rootContext.open.value">
    <SelectContentImpl v-bind="{ ...forwarded, ...$attrs }">
      <slot />
    </SelectContentImpl>
  </Presence>

  <Teleport v-if="!presenceRef?.present && fragment" :to="fragment">
    <SelectProvider :context="rootContext">
      <div>
        <slot />
      </div>
    </SelectProvider>
  </Teleport>
</template>
