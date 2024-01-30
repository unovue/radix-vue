<script lang="ts">
import type {
  MenuItemEmits,
  MenuItemProps,
} from './MenuItem.vue'

export type MenuRadioItemEmits = MenuItemEmits

export interface MenuRadioItemProps extends MenuItemProps {
  /** The unique value of the item. */
  value: string
}
</script>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { getCheckedState } from './utils'
import MenuItem from './MenuItem.vue'
import { injectMenuRadioGroupContext } from './MenuRadioGroup.vue'
import { provideMenuItemIndicatorContext } from './MenuItemIndicator.vue'

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
