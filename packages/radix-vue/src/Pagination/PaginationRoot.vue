<script lang="ts">
interface PaginationRootContextValue {
  page: Ref<number>
  onPageChange: (value: number) => void
  pageCount: Ref<number>
  siblingCount: Ref<number>
  disabled: Ref<boolean>
  showEdges: Ref<boolean>
}

export const PAGINATION_CONTEXT_VALUE = Symbol() as InjectionKey<PaginationRootContextValue>
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import type { PrimitiveProps } from '@/Primitive'
import { useVModel } from '@vueuse/core'
import { type InjectionKey, type Ref, computed, provide, toRefs } from 'vue'

export interface PaginationRootProps extends PrimitiveProps {
  page?: number
  defaultPage?: number
  itemsPerPage?: number
  total?: number
  siblingCount?: number
  disabled?: boolean
  showEdges?: boolean
}

export type PaginationRootEmits = {
  'update:page': [value: number]
}

const props = withDefaults(defineProps<PaginationRootProps>(), {
  as: 'nav',
  total: 0,
  itemsPerPage: 10,
  siblingCount: 2,
  defaultPage: 1,
  showEdges: false,
})
const emits = defineEmits<PaginationRootEmits>()
const { siblingCount, disabled, showEdges } = toRefs(props)

const page = useVModel(props, 'page', emits, {
  defaultValue: props.defaultPage,
  passive: (props.page === undefined) as false,
}) as Ref<number>

const pageCount = computed(() => Math.ceil(props.total / props.itemsPerPage))

provide(PAGINATION_CONTEXT_VALUE, {
  page,
  onPageChange(value) {
    page.value = value
  },
  pageCount,
  siblingCount,
  disabled,
  showEdges,
})
</script>

<template>
  <Primitive :as="as" :as-child="asChild">
    <slot :page="page" />
  </Primitive>
</template>
