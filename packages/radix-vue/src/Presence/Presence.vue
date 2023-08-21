<script setup lang="ts">
import {
  type Directive,
  type VNode,
  getCurrentInstance,
  ref,
  toRefs,
  useSlots,
  withDirectives,
} from 'vue'
import { usePresence } from './usePresence'
import { renderSlotFragments } from '@/shared'

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

const vPresence: Directive = {
  beforeMount(el: HTMLElement) {
    // special case to handle animation for PopperContent
    if (el.hasAttribute('data-radix-popper-content-wrapper'))
      node.value = el.firstChild as HTMLElement
    else node.value = el
  },
}

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

  if (forceMount.value || present.value || isPresent.value)
    return withDirectives(slots.default?.()?.[0] as VNode, [[vPresence]])
  else return null
}

defineExpose({
  present: isPresent,
})
</script>

<template>
  <render />
</template>
