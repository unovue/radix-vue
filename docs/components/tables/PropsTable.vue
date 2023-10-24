<script setup lang="ts">
import { ProseCodeInline, ProseTable, ProseTd, ProseTh, ProseTr } from '../prose'
import { PopoverArrow, PopoverContent, PopoverRoot, PopoverTrigger } from 'radix-vue'
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
        <ProseTh class="w-[45%]">
          <span>Prop</span>
        </ProseTh>
        <ProseTh>
          <span>Type</span>
        </ProseTh>
        <ProseTh>
          <span>Default</span>
        </ProseTh>
      </ProseTr>
    </thead>
    <tbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop.name}-${index}`">
        <ProseTd>
          <div class="flex items-center gap-1">
            <ProseCodeInline class="!text-[13px]">
              {{ prop.name }}{{ prop.required ? "*" : null }}
            </ProseCodeInline>
            <template v-if="prop.description">
              <PopoverRoot>
                <PopoverTrigger class="p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-2 outline-neutral-800">
                  <Icon icon="radix-icons:info-circled" class="h-4 w-4 text-neutral-400" />
                </PopoverTrigger>
                <PopoverContent
                  side="top"
                  class="text-xs rounded-lg px-3 py-2.5 bg-white dark:bg-neutral-800 w-[265px] shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                >
                  <span size="2" class="leading-5" v-html="prop.description" />
                  <PopoverArrow class="dark:fill-neutral-800 fill-white" :size="8" />
                </PopoverContent>
              </PopoverRoot>
            </template>
          </div>
        </ProseTd>
        <ProseTd>
          <div class="flex items-center gap-1">
            <ProseCodeInline variant="secondary">
              {{ prop.typeSimple ? prop.typeSimple : prop.type }}
            </ProseCodeInline>
            <template v-if="prop.typeSimple">
              <PopoverRoot>
                <PopoverTrigger class="p-1.5 rounded hover:bg-neutral-900 focus:outline-2 outline-neutral-800">
                  <Icon icon="radix-icons:info-circled" class="h-4 w-4 text-neutral-400" />
                </PopoverTrigger>
                <PopoverContent
                  side="top"
                  class="text-xs rounded-lg px-3 py-2.5 bg-neutral-800 max-w-[265px] min-w-max shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                >
                  <ProseCodeInline class="whitespace-nowrap !text-[12px]">
                    {{ prop.type }}
                  </ProseCodeInline>
                  <PopoverArrow class="fill-neutral-800" :size="8" />
                </PopoverContent>
              </PopoverRoot>
            </template>
          </div>
        </ProseTd>
        <ProseTd>
          <div v-if="prop.default" class="flex items-center gap-1">
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
      </ProseTr>
    </tbody>
  </ProseTable>
</template>
