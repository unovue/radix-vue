<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import DummyDialog from "./_DummyDialog.vue";
import { trapFocus } from "@/shared";

const openWithFocusScope = ref(false);
const trappedRef = ref<HTMLElement>();

watch(openWithFocusScope, async () => {
  await nextTick();
  if (trappedRef.value) trapFocus(trappedRef.value);
});

const handleAlert = () => {
  window.alert("Alert");
};
</script>

<template>
  <Story
    title="DismissableLayer/Dialog"
    :layout="{ type: 'grid', width: '50%' }"
  >
    <Variant title="Dialog (fully modal example)">
      <div class="h-[300vh] flex flex-col">
        <ul class="list-disc ml-4">
          <li>✅ focus should move inside `Dialog` when mounted</li>
          <li>✅ focus should be trapped inside `Dialog`</li>
          <li>✅ scrolling outside `Dialog` should be disabled</li>
          <li>✅ should be able to dismiss `Dialog` on pressing escape</li>
          <li class="ml-6">
            ✅ focus should return to the open button (TODO: we yet to have
            focusScope/focusGuard)
          </li>
          <li>
            ✅ interacting outside `Dialog` should be disabled (clicking the
            "alert me" button shouldn't do anything)
          </li>
          <li>➕</li>
          <li>
            ✅ should be able to dismiss `Dialog` when interacting outside
          </li>
          <li class="ml-6">
            ✅ focus should return to the open button (TODO: we yet to have
            focusScope/focusGuard)
          </li>
        </ul>

        <div class="flex flex-col gap-4 mt-12">
          <DummyDialog
            open-label="Open Dialog"
            close-label="Close dialog"
          ></DummyDialog>

          <input type="text" value="some input" />
          <button @click="handleAlert">Alert me</button>
        </div>
      </div>
    </Variant>
  </Story>
</template>
