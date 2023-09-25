<script setup lang="ts">
import {
  type VNode,
  getCurrentInstance,
  h,
  ref,
  toRefs,
  useSlots,
} from 'vue'
import { usePresence } from './usePresence'
import { renderSlotFragments } from '@/shared'
import { unrefElement } from '@vueuse/core'

interface PresenceProps {
  /**
   * Conditional to mount or unmount the child element. Similar to `v-if`
   *
   * @required true
   */
  present: boolean
  /**
   * Force the first child element to render all the time.
   * Useful for programmatically render grandchild component together with the exposed `present`
   *
   * @default false
   */
  forceMount?: boolean
}

const props = defineProps<PresenceProps>()
const { present, forceMount } = toRefs(props)

const slots = useSlots()
const node = ref<HTMLElement>()
// Mount composables once to prevent duplicated eventListener
const { isPresent } = usePresence(present, node)

let children = slots.default?.()
children = renderSlotFragments(children || [])
const instance = getCurrentInstance()

function render() {
  if (children && children?.length > 1) {
    const componentName = instance?.parent?.type.name
      ? `<${instance.parent.type.name} />`
      : 'component'

    throw new Error(
      [
        `Detected an invalid children for \`${componentName}\` for  \`Presence\` component.`,
        '',
        'Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.',
        'You can apply a few solutions:',
        [
          'Provide a single child element so that `presence` directive attach correctly.rv',
          'Ensure the first child is an actual element instead of a raw text node or comment node.',
        ]
          .map(line => `  - ${line}`)
          .join('\n'),
      ].join('\n'),
    )
  }

  if (forceMount.value || present.value || isPresent.value) {
    return h(slots.default?.()[0] as VNode, {
      ref: v => node.value = unrefElement(v as HTMLElement),
    })
  }
  else { return null }
}

defineExpose({
  present: isPresent,
})
</script>

<template>
  <render />
</template>
