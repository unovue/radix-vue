<script setup lang="ts">
import { ref } from "vue";
import { makeCodeSandboxParams } from "../codeeditor/index";
import Tooltip from "./Tooltip.vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  name: string;
  files: string[];
}>();

const sources = ref<Record<string, string>>({});

props.files?.forEach((file) => {
  import(`../components/demo/${props.name}/${file}?raw`).then((res) => (sources.value[file] = res.default));
});
</script>

<template>
  <form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
    <input type="hidden" name="query" value="file=src/App.vue" />
    <input type="hidden" name="environment" value="server" />
    <input type="hidden" name="hidedevtools" value="1" />
    <input type="hidden" name="parameters" :value="makeCodeSandboxParams(name, sources)" />

    <Tooltip :content="`Open ${name} in CodeSandbox`">
      <button type="submit">
        <Icon icon="ph-codesandbox-logo"></Icon>
      </button>
    </Tooltip>
  </form>
</template>
