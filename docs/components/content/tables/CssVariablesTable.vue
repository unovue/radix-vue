<script setup lang="ts">
type KeyboardDef = {
  cssVariable: string;
  description: string[];
};

interface DataAttributesTableProps {
  data: KeyboardDef[];
}
const props = defineProps<DataAttributesTableProps>();
</script>

<template>
  <ProseTable>
    <ProseThead>
      <ProseTr>
        <ProseTh class="w-[45%]">
          <p>CSS Variable</p>
        </ProseTh>
        <ProseTh class="w-[55%]">
          <p>Description</p>
        </ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop.cssVariable}-${index}`">
        <ProseTd>
          <ProseCodeInline class="!whitespace-normal py-1">
            {{ prop.cssVariable }}
          </ProseCodeInline>
        </ProseTd>
        <ProseTd class="" :css="{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }">
          {{ prop.description }}
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
