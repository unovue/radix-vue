<script setup lang="ts">
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
          <p>Key</p>
        </ProseTh>
        <ProseTh class="w-[55%]">
          <p>Description</p>
        </ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop}-${index}`">
        <ProseTd class="flex items-center gap-1">
            <kbd class="rounded-lg border bg-neutral-900 border-neutral-700 border-b-2 px-1.5 py-[1px] text-[13px]" v-for="(key, propIndex) in prop.keys" :key="`${key}-${propIndex}`">
              {{ key }}
            </kbd>
        </ProseTd>
        <ProseTd class="">
          <div class="flex items-center gap-1">
            <p>
              {{ prop.description }}
            </p>
          </div>
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>
