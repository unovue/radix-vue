<script setup lang="ts">
import { ProseCodeInline, ProseTable, ProseTd, ProseTh, ProseTr } from '../prose'
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
  data: PropDef[]
}
const props = defineProps<PropsTableProps>()
</script>

<template>
  <ProseTable>
    <div class="absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]">
      <Icon icon="ph:sliders-light" />
    </div>
    <thead class="">
      <ProseTr class="">
        <ProseTh class="w-1/6">
          <span>Prop</span>
        </ProseTh>
        <ProseTh class="w-1/6">
          <span>Default</span>
        </ProseTh>
        <ProseTh class="w-2/3">
          <span>Type</span>
        </ProseTh>
      </ProseTr>
    </thead>

    <tbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop.name}-${index}`">
        <ProseTd>
          <div class="flex h-full items-start gap-1">
            <ProseCodeInline class="!text-[13px]">
              {{ prop.name }}{{ prop.required ? "*" : null }}
            </ProseCodeInline>
          </div>
        </ProseTd>

        <ProseTd>
          <div v-if="prop.default" class="flex  h-full items-start gap-1">
            <ProseCodeInline variant="secondary">
              {{ prop.default }}
            </ProseCodeInline>
          </div>
          <template v-else>
            <div as="{AccessibleIcon}" label="No default value">
              <Icon icon="radix-icons:divider-horizontal" />
            </div>
          </template>
        </ProseTd>

        <ProseTd>
          <div class="flex items-center gap-1">
            <div>
              <ProseCodeInline variant="secondary">
                {{ prop.typeSimple ? prop.typeSimple : prop.type }}
              </ProseCodeInline>
              <div class="vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300" v-html="prop.description" />
            </div>
          </div>
        </ProseTd>
      </ProseTr>
    </tbody>
  </ProseTable>
</template>
