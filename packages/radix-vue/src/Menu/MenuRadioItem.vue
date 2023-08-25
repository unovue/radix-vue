<script setup lang="ts">
import { computed, inject, provide, toRefs } from 'vue'
import { getCheckedState } from './utils'
import MenuItem, {
  type MenuItemEmits,
  type MenuItemProps,
} from './MenuItem.vue'
import { MENU_RADIO_GROUP_INJECTION_KEY } from './MenuRadioGroup.vue'
import { MENU_ITEM_INDICATOR_INJECTION_KEY } from './MenuItemIndicator.vue'

export interface MenuRadioItemProps extends MenuItemProps {
  value: string
}
export type MenuRadioItemEmits = MenuItemEmits

const props = defineProps<MenuRadioItemProps>()
const emits = defineEmits<MenuRadioItemEmits>()

const { value } = toRefs(props)
const radioGroupContext = inject(MENU_RADIO_GROUP_INJECTION_KEY)
const checked = computed(
  () => radioGroupContext?.modelValue.value === value?.value,
)

provide(MENU_ITEM_INDICATOR_INJECTION_KEY, {
  checked,
})
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
        radioGroupContext?.onValueChange(value);
      }
    "
  >
    <slot />
  </MenuItem>
</template>
