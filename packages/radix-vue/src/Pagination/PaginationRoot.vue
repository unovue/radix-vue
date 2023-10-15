<script lang="ts">
import { createContext } from '@/shared'

type PaginationRootContext = {
  page: Ref<number>
  onPageChange: (value: number) => void
  pageCount: Ref<number>
  siblingCount: Ref<number>
  disabled: Ref<boolean>
  showEdges: Ref<boolean>
}

export const [injectPaginationRootContext, providePaginationRootContext]
  = createContext<PaginationRootContext>('PaginationRoot')
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import type { PrimitiveProps } from '@/Primitive'
import { useVModel } from '@vueuse/core'
import { type Ref, computed, toRefs } from 'vue'

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
  passive: !props.page as false,
}) as Ref<number>

const pageCount = computed(() => Math.ceil(props.total / props.itemsPerPage))

providePaginationRootContext({
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
