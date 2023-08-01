<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { DismissableLayer } from "../";
import { trapFocus } from "@/shared";

defineProps<{
  openLabel?: string;
  closeLabel?: string;
}>();

const open = ref(false);

const dialogRef = ref();
watch(open, async () => {
  await nextTick();
  dialogRef.value && trapFocus(dialogRef.value);
});
</script>

<template>
  <button type="button" @click="open = !open">
    {{ openLabel }}
  </button>

  <div v-if="open">
    <Teleport to="body">
      <div
        class="fixed top-0 left-0 bottom-0 right-0 pointer-event-none bg-black/30"
      ></div>
    </Teleport>

    <Teleport to="body">
      <DismissableLayer asChild @dismiss="open = false">
        <div
          ref="dialogRef"
          class="flex items-start gap-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white min-w-[300px] min-height-[200px] rounded-lg p-8 bg-white shadow-xl"
        >
          <slot></slot>
          <button type="button" @click="open = false">{{ closeLabel }}</button>
          <input type="text" value="Hello world" />
        </div>
      </DismissableLayer>
    </Teleport>
  </div>
</template>
