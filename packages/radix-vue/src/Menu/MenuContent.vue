<script lang="ts">
import type {
  MenuContentImplEmits,
  MenuRootContentProps,
} from './MenuContentImpl.vue'

export type MenuContentEmits = MenuContentImplEmits

export interface MenuContentProps extends MenuRootContentProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import MenuRootContentModal from './MenuRootContentModal.vue'
import MenuRootContentNonModal from './MenuRootContentNonModal.vue'
import { injectMenuContext, injectMenuRootContext } from './MenuRoot.vue'
import { Presence } from '@/Presence'
import { useEmitAsProps } from '@/shared'

const props = defineProps<MenuContentProps>()
const emits = defineEmits<MenuContentEmits>()

const menuContext = injectMenuContext()
const rootContext = injectMenuRootContext()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <Presence :present="forceMount || menuContext.open.value">
    <MenuRootContentModal
      v-if="rootContext.modal.value"
      v-bind="{ ...$attrs, ...props, ...emitsAsProps }"
    >
      <slot />
    </MenuRootContentModal>
    <MenuRootContentNonModal
      v-else
      v-bind="{ ...$attrs, ...props, ...emitsAsProps }"
    >
      <slot />
    </MenuRootContentNonModal>
  </Presence>
</template>
