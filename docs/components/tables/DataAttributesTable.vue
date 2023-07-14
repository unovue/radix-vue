<script setup lang="ts">
import { ProseTh, ProseTd, ProseTr, ProseCodeInline, ProseTable, ProseThead, ProseTbody } from "../prose"

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
          <span>Data Attribute</span>
        </ProseTh>
        <ProseTh class="w-[55%]">
          <span>Value</span>
        </ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop.attribute}-${index}`">
        <ProseTd>
          <div class="flex items-center gap-1">
            <ProseCodeInline class="!text-[13px]">
              {{ prop.attribute }}
            </ProseCodeInline>
          </div>
        </ProseTd>
        <ProseTd class="">
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
