<script lang="ts">
import type {
  SelectContentImplEmits,
  SelectContentImplProps,
} from './SelectContentImpl.vue'

export type SelectContentEmits = SelectContentImplEmits

export interface SelectContentProps extends SelectContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SelectContentImpl from './SelectContentImpl.vue'
import { injectSelectRootContext } from './SelectRoot.vue'
import { Presence } from '@/Presence'
import { useForwardPropsEmits } from '@/shared'
import { ListboxRoot } from '@/Listbox'
import SelectProvider from './SelectProvider.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SelectContentProps>()

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
      <ListboxRoot>
        <div>
          <slot />
        </div>
      </ListboxRoot>
    </SelectProvider>
  </Teleport>
</template>
