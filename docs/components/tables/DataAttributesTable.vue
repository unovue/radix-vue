<script setup lang="ts">
import { ProseCodeInline, ProseTable, ProseTbody, ProseTd, ProseTh, ProseThead, ProseTr } from '../prose'

type KeyboardDef = {
  attribute: string
  values: string[]
}

interface DataAttributesTableProps {
  data: KeyboardDef[]
}
const props = defineProps<DataAttributesTableProps>()
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
          <ProseCodeInline class="!text-[13px]">
            {{ prop.attribute }}
          </ProseCodeInline>
        </ProseTd>
        <ProseTd class="">
          <ProseCodeInline v-if="Array.isArray(prop.values)" variant="secondary">
            <span v-for="(value, propIndex) in prop.values" :key="value">
              {{ propIndex + 1 !== prop.values.length ? `"${value}" | ` : `"${value}"` }}
            </span>
          </ProseCodeInline>
          <span v-else>{{ prop.values }}</span>
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
