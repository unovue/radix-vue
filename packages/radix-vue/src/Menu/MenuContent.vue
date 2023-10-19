<script setup lang="ts">
import MenuRootContentModal from './MenuRootContentModal.vue'
import MenuRootContentNonModal from './MenuRootContentNonModal.vue'
import { injectMenuContext, injectMenuRootContext } from './MenuRoot.vue'
import {
  type MenuContentImplEmits,
  type MenuRootContentProps,
} from './MenuContentImpl.vue'
import { Presence } from '@/Presence'
import { useEmitAsProps } from '@/shared'

export interface MenuContentProps extends MenuRootContentProps {}
export type MenuContentEmits = MenuContentImplEmits

const props = defineProps<MenuContentProps>()
const emits = defineEmits<MenuContentEmits>()

const menuContext = injectMenuContext()
const rootContext = injectMenuRootContext()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <Presence :present="menuContext.open.value">
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
