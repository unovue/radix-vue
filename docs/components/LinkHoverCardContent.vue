<script setup lang="ts">
import { computed } from 'vue'
import { ProseCodeInline, ProseTable, ProseTd, ProseTh, ProseThead, ProseTr } from './prose'
import { Icon } from '@iconify/vue'

type PropDef = {
  name?: string
  required?: boolean
  default?: string | boolean
  type: string
  typeSimple: string
  description?: string
}

interface PropsTableProps {
  title: string
  data: string
}
const props = defineProps<PropsTableProps>()

const data = computed(() => JSON.parse(props.data))
</script>

<template>
  <ul class="list-none m-0 p-0 relative">
    <div
      class="flex justify-end sticky top-2"
    >
      <h5
        class="font-extrabold -mb-2 capitalize p-1 rounded-lg bg-card/20 backdrop-blur-sm"
      >
        {{ title }}
      </h5>
    </div>

    <li
      v-for="(prop, index) in data"
      :key="`${prop.name}-${index}`"
      class="pb-2 border-b border-muted mb-4"
    >
      <div class="inline-flex items-center gap-2 flex-wrap">
        <div class="text-primary font-mono font-bold text-sm">
          {{ prop.name }}
        </div>
        <code class="px-2 py-0.5 text-foreground bg-muted text-xs">
          {{ prop.typeSimple ? prop.typeSimple : prop.type }}
        </code>
        <code
          v-if="prop.default"
          class="px-2 py-0.5 text-foreground bg-muted text-xs"
        >
          default: {{ prop.default }}
        </code>
        <code
          v-if="prop.required"
          class="px-2 py-0.5 text-red-500 bg-muted text-xs"
        >
          {{ prop.required ? "required" : null }}
        </code>
      </div>

      <p
        class="text-muted-foreground text-sm"
        v-html="prop.description"
      />
    </li>
  </ul>
</template>
