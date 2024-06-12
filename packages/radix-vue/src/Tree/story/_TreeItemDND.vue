<script setup lang="ts">
import { computed, h, nextTick, ref, render, watchEffect } from 'vue'
import { type FlattenedItem, TreeItem } from '..'
import { usePrimitiveElement } from '@/Primitive'
import { draggable, dropTargetForElements, monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { type Instruction, type ItemMode, attachInstruction, extractInstruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item'
import { pointerOutsideOfPreview } from '@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview'
import { setCustomNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview'
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  item: FlattenedItem<any>
}>()

const { primitiveElement, currentElement } = usePrimitiveElement()
const isDragging = ref(false)
const isDraggedOver = ref(false)
const isInitialExpanded = ref(false)
const instruction = ref<Extract<Instruction, { type: 'reorder-above' | 'reorder-below' | 'make-child' }> | null>(null)

const mode = computed(() => {
  if (props.item.hasChildren)
    return 'expanded'
  if (props.item.index + 1 === props.item.parentItem?.children?.length)
    return 'last-in-group'
  return 'standard'
})

watchEffect((onCleanup) => {
  if (!currentElement.value)
    return

  const item = { ...props.item.value, level: props.item.level, id: props.item._id }

  const expandItem = () => {
    // @ts-expect-error can't infer generic components instance's type
    // https://github.com/vuejs/language-tools/issues/3206
    if (!primitiveElement.value?.isExpanded) {
      // @ts-expect-error can't infer generic components instance's type
      primitiveElement.value?.handleToggle()
    }
  }

  const closeItem = () => {
    // @ts-expect-error can't infer generic components instance's type
    // https://github.com/vuejs/language-tools/issues/3206
    if (primitiveElement.value?.isExpanded) {
      // @ts-expect-error can't infer generic components instance's type
      primitiveElement.value?.handleToggle()
    }
  }

  const dndFunction = combine(
    draggable({
      element: currentElement.value,
      getInitialData: () => item,
      onDragStart: () => {
        isDragging.value = true
        // @ts-expect-error can't infer generic components instance's type
        isInitialExpanded.value = primitiveElement.value?.isExpanded
        closeItem()
      },
      onDrop: () => {
        isDragging.value = false
        if (isInitialExpanded.value)
          expandItem()
      },
      onGenerateDragPreview({ nativeSetDragImage }) {
        setCustomNativeDragPreview({
          getOffset: pointerOutsideOfPreview({ x: '16px', y: '8px' }),
          render: ({ container }) => {
            return render(h(
              'div',
              { class: 'bg-white text-blackA11 rounded-md text-sm font-medium px-3 py-1.5' },
              item.id,
            ), container)
          },
          nativeSetDragImage,
        })
      },
    }),

    dropTargetForElements({
      element: currentElement.value,
      getData: ({ input, element }) => {
        const data = { id: item.id }

        return attachInstruction(data, {
          input,
          element,
          indentPerLevel: 16,
          currentLevel: props.item.level,
          mode: mode.value,
          block: [],
        })
      },
      canDrop: ({ source }) => {
        return source.data.id !== item.id
      },
      onDrag: ({ self }) => {
        instruction.value = extractInstruction(self.data) as typeof instruction.value
      },
      onDragEnter: ({ source }) => {
        if (source.data.id !== item.id) {
          isDraggedOver.value = true
          expandItem()
        }
      },
      onDragLeave: () => {
        isDraggedOver.value = false
        instruction.value = null
      },
      onDrop: ({ location }) => {
        isDraggedOver.value = false
        instruction.value = null
        if (location.current.dropTargets[0].data.id === item.id) {
          nextTick(() => {
            expandItem()
          })
        }
      },
      getIsSticky: () => true,
    }),

    monitorForElements({
      canMonitor: ({ source }) => {
        return source.data.id !== item.id
      },
    }),
  )

  // Cleanup dnd function
  onCleanup(() => dndFunction())
})
</script>

<template>
  <TreeItem
    ref="primitiveElement"
    v-slot="{ isExpanded }"
    :value="item.value"
    :level="item.level"
    class="relative w-full border-none"
    :class="{ 'opacity-50': isDragging }"
  >
    <Icon v-if="item.hasChildren" icon="radix-icons:chevron-down" class="h-4 w-4 transition" :class="{ '-rotate-90': isExpanded }" />
    <div class="pl-2">
      {{ item.value.title }}
    </div>

    <div
      v-if="instruction"
      class="absolute h-full w-full top-0 border-blue-500 "
      :style="{
        left: `${instruction?.currentLevel * instruction?.indentPerLevel}px`,
        width: `calc(100% - ${instruction?.currentLevel * instruction?.indentPerLevel}px)`,
      }"
      :class="{
        '!border-b-2': instruction?.type === 'reorder-below',
        '!border-t-2': instruction?.type === 'reorder-above',
        '!border-2 rounded': instruction?.type === 'make-child',
      }"
    />
  </TreeItem>
</template>
