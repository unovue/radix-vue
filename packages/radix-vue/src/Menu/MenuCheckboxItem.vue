<script lang="ts">
import type { CheckedState } from './utils'
import type {
  MenuItemEmits,
  MenuItemProps,
} from './MenuItem.vue'

export type MenuCheckboxItemEmits = MenuItemEmits & {
  /** Event handler called when the checked state changes. */
  'update:checked': [payload: boolean]
}

export interface MenuCheckboxItemProps extends MenuItemProps {
  /** The controlled checked state of the item. Can be used as `v-model:checked`. */
  checked?: CheckedState
}
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { getCheckedState, isIndeterminate } from './utils'
import MenuItem from './MenuItem.vue'
import { provideMenuItemIndicatorContext } from './MenuItemIndicator.vue'

const props = withDefaults(defineProps<MenuCheckboxItemProps>(), {
  checked: false,
})
const emits = defineEmits<MenuCheckboxItemEmits>()
const checked = useVModel(props, 'checked', emits)

provideMenuItemIndicatorContext({ checked })
</script>

<template>
  <MenuItem
    role="menuitemcheckbox"
    v-bind="props"
    :aria-checked="isIndeterminate(checked) ? 'mixed' : checked"
    :data-state="getCheckedState(checked)"
    @select="
      async (event) => {
        emits('select', event);
        if (isIndeterminate(checked)) {
          checked = true;
        }
        else {
          checked = !checked;
        }
      }
    "
  >
    <slot />
  </MenuItem>
</template>
