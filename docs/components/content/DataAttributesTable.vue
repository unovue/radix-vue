<script setup lang="ts">
type KeyboardDef = {
  attribute: string;
  values: string[];
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
          <p>Data Attribute</p>
        </ProseTh>
        <ProseTh class="w-[55%]">
          <p>Value</p>
        </ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop.attribute}-${index}`">
        <ProseTd class="flex items-center gap-1">
          <ProseCodeInline class="!text-[13px]">
            {{ prop.attribute }}
          </ProseCodeInline>
        </ProseTd>
        <ProseTd class="" :css="{ borderBottom: '1px solid $gray6', py: '$3', pr: '$4' }">
          <div class="flex items-center gap-1">
            <ProseCodeInline variant="secondary">
              <span v-for="(value, propIndex) in prop.values" :key="value">
                {{ propIndex + 1 !== prop.values.length ? `"${value}" | ` : `"${value}"` }}
              </span>
            </ProseCodeInline>
          </div>
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
