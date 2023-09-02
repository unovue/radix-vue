<script setup lang="ts">
import MenuContentImpl, {
  type MenuContentImplEmits,
  type MenuContentImplProps,
} from './MenuContentImpl.vue'
import { injectMenuContext, injectMenuRootContext } from './MenuRoot.vue'
import { injectMenuSubContext } from './MenuSub.vue'
import { SUB_CLOSE_KEYS } from './utils'
import { Presence } from '@/Presence'
import { usePrimitiveElement } from '@/Primitive'
import { PopperContentPropsDefaultValue } from '@/Popper'
import { useEmitAsProps } from '@/shared'

export interface MenuSubContentProps extends MenuContentImplProps {}
export type MenuSubContentEmits = MenuContentImplEmits

const props = withDefaults(defineProps<MenuSubContentProps>(), {
  ...PopperContentPropsDefaultValue,
})
const emits = defineEmits<MenuSubContentEmits>()

const emitsAsProps = useEmitAsProps(emits)

const context = injectMenuContext()
const rootContext = injectMenuRootContext()
const subContext = injectMenuSubContext()

const { primitiveElement, currentElement: subContentElement }
  = usePrimitiveElement()
</script>

<template>
  <Presence :present="context.open.value">
    <MenuContentImpl
      v-bind="{ ...props, ...emitsAsProps }"
      :id="subContext.contentId"
      ref="primitiveElement"
      :aria-labelledby="subContext.triggerId"
      align="start"
      :side="rootContext.dir.value === 'rtl' ? 'left' : 'right'"
      :disable-outside-pointer-events="false"
      :disable-outside-scroll="false"
      :trap-focus="false"
      @open-auto-focus="(event) => {
        if (rootContext.isUsingKeyboardRef.value) subContentElement?.focus();
        // event.preventDefault();
      }"
      @close-auto-focus.prevent
      @focus-outside="
        async (event) => {
          if (event.defaultPrevented) return;
          // We prevent closing when the trigger is focused to avoid triggering a re-open animation
          // on pointer interaction.
          if (event.target !== subContext.trigger.value)
            context.onOpenChange(false);
        }
      "
      @escape-key-down="
        (event) => {
          rootContext.onClose();
          // ensure pressing escape in submenu doesn't escape full screen mode
          event.preventDefault();
        }
      "
      @keydown="(event: KeyboardEvent) => {
        // Submenu key events bubble through portals. We only care about keys in this menu.
        const isKeyDownInside = (event.currentTarget as HTMLElement)?.contains(event.target as HTMLElement);
        const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir.value].includes(event.key);
        if (isKeyDownInside && isCloseKey) {
          context.onOpenChange(false);
          // We focus manually because we prevented it in `onCloseAutoFocus`
          subContext.trigger.value?.focus();
          // prevent window from scrolling
          event.preventDefault();
        }
      }"
    >
      <slot />
    </MenuContentImpl>
  </Presence>
</template>
