<script lang="ts">
import type { ListboxFilterEmits, ListboxFilterProps } from '@/Listbox'
import { useForwardPropsEmits } from '..'

export interface SelectFilterProps extends ListboxFilterProps {}

export type SelectFilterEmits = ListboxFilterEmits
</script>

<script setup lang="ts">
import { ListboxFilter } from '@/Listbox'

const props = withDefaults(defineProps<SelectFilterProps>(), {
  autoFocus: true,
})
const emits = defineEmits<SelectFilterEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ListboxFilter v-bind="forwarded">
    <slot />
  </ListboxFilter>
</template>
