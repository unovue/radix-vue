<script setup lang="ts">
import { PopoverRoot, PopoverTrigger, PopoverContent, PopoverArrow } from "radix-vue";
import { Icon } from "@iconify/vue";

type PropDef = {
  name?: string;
  required?: boolean;
  default?: string | boolean;
  type: string;
  typeSimple: string;
  description?: string;
};

interface PropsTableProps {
  data: PropDef[]
}
const props = defineProps<PropsTableProps>();
</script>

<template>
  <ProseTable>
    <ProseThead>
      <ProseTr>
        <ProseTh class="w-[45%]">
          <p>Prop</p>
        </ProseTh>
        <ProseTh>
          <p>Type</p>
        </ProseTh>
        <ProseTh>
          <p>Default</p>
        </ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop.name}-${index}`">
        <ProseTd class="flex items-center gap-1">
          <ProseCodeInline>
            {{ prop.name }}{{ prop.required ? "*" : null }}
          </ProseCodeInline>
          <template v-if="prop.description">
            <PopoverRoot>
              <PopoverTrigger>
                <Icon icon="radix-icons:info-circled" />
              </PopoverTrigger>
              <PopoverContent
                class="text-xs rounded px-3 py-2.5 bg-neutral-800 w-[260px]  shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade">
                <p size="2" :css="{ lineHeight: '20px' }">
                  {{ prop.description }}
                </p>
                <PopoverArrow class="bg-neutral-800" size="8" />
              </PopoverContent>
            </PopoverRoot>
          </template>
        </ProseTd>
        <ProseTd class="" :css="{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }">
        <div class="flex items-center gap-1">
          <span :css="{ bc: '$gray4', color: '$gray11' }">
            {{ prop.typeSimple ? prop.typeSimple : prop.type }}
          </span>
          <template v-if="prop.typeSimple">
            <PopoverRoot>
              <PopoverTrigger>
                <Icon icon="radix-icons:info-circled" />
              </PopoverTrigger>
              <PopoverContent
                class="text-xs rounded px-3 py-2.5 bg-neutral-800 min-w-max shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade">
                <ProseCodeInline class="whitespace-nowrap">
                  {{ prop.type }}
                </ProseCodeInline>
                <PopoverArrow class="bg-neutral-800" size="8" />
              </PopoverContent>
            </PopoverRoot>
          </template>
        </div>
        </ProseTd>
        <ProseTd :css="{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }">
          <template v-if="prop.default">
            <p :css="{ bc: '$gray4', color: '$gray11' }">{{
              prop.default
            }}</p>
          </template>
          <template v-else>
            <div as="{AccessibleIcon}" label="No default value" :css="{ color: '$gray8' }">
              <Icon icon="radix-icons:divider-horizontal" />
            </div>
          </template>
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
