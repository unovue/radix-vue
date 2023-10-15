<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { getCheckedState } from './utils'
import MenuItem, {
  type MenuItemEmits,
  type MenuItemProps,
} from './MenuItem.vue'
import { injectMenuRadioGroupContext } from './MenuRadioGroup.vue'
import { provideMenuItemIndicatorContext } from './MenuItemIndicator.vue'

export interface MenuRadioItemProps extends MenuItemProps {
  value: string
}
export type MenuRadioItemEmits = MenuItemEmits

const props = defineProps<MenuRadioItemProps>()
const emits = defineEmits<MenuRadioItemEmits>()

const { value } = toRefs(props)
const radioGroupContext = injectMenuRadioGroupContext()
const checked = computed(
  () => radioGroupContext.modelValue.value === value?.value,
)

provideMenuItemIndicatorContext({ checked })
</script>

<template>
  <MenuItem
    role="menuitemradio"
    v-bind="props"
    :aria-checked="checked"
    :data-state="getCheckedState(checked)"
    @select="
      async (event) => {
        emits('select', event);
        radioGroupContext.onValueChange(value);
      }
    "
  >
    <slot />
  </MenuItem>
</template>
