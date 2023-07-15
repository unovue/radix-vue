<script setup lang="ts">
import { ProseTh, ProseTd, ProseTr, ProseTable, ProseThead, ProseTbody } from "../prose"

type KeyboardDef = {
  keys: string[];
  description: string;
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
          <span>Key</span>
        </ProseTh>
        <ProseTh class="w-[55%]">
          <span>Description</span>
        </ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop}-${index}`">
        <ProseTd>
          <div class="flex items-center gap-1">
            <kbd class="font-sans rounded-md border bg-neutral-900 border-neutral-700 border-b-2 px-1.5 py-[1px]" v-for="(key, propIndex) in prop.keys" :key="`${key}-${propIndex}`">
              {{ key }}
            </kbd>
          </div>
        </ProseTd>
        <ProseTd class="">
          <div class="flex items-center gap-1">
            <span>
              {{ prop.description }}
            </span>
          </div>
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
