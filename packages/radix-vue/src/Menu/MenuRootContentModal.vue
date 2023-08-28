<script setup lang="ts">
import { inject } from 'vue'
import MenuContentImpl, {
  type MenuContentImplEmits,
  type MenuRootContentProps,
} from './MenuContentImpl.vue'
import { MENU_INJECTION_KEY } from './MenuRoot.vue'
import { useEmitAsProps, useHideOthers } from '@/shared'
import { usePrimitiveElement } from '@/Primitive'

const props = defineProps<MenuRootContentModalProps>()

const emits = defineEmits<MenuRootContentModalEmits>()

const context = inject(MENU_INJECTION_KEY)

interface MenuRootContentModalProps extends MenuRootContentProps {}
type MenuRootContentModalEmits = MenuContentImplEmits

const emitsAsProps = useEmitAsProps(emits)

const { primitiveElement, currentElement } = usePrimitiveElement()
useHideOthers(currentElement)
</script>

<template>
  <MenuContentImpl
    ref="primitiveElement"
    v-bind="{ ...props, ...emitsAsProps }"
    :trap-focus="context?.open.value"
    :disable-outside-pointer-events="context?.open.value"
    :disable-outside-scroll="true"
    @dismiss="context?.onOpenChange(false)"
    @focus-outside.prevent="emits('focusOutside', $event)"
  >
    <slot />
  </MenuContentImpl>
</template>
