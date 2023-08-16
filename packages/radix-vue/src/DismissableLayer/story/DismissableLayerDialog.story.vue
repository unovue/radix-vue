<script setup lang="ts">
import DummyDialog from "./_DummyDialog.vue";
import DummyPopover from "./_DummyPopover.vue";

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
      <div class="h-[300vh]">
        <ul class="ml-4 list-disc">
          <li>✅ focus should move inside `Dialog` when mounted</li>
          <li>✅ focus should be trapped inside `Dialog`</li>
          <li>✅ scrolling outside `Dialog` should be disabled</li>
          <li>✅ should be able to dismiss `Dialog` on pressing escape</li>
          <li class="ml-6">✅ focus should return to the open button</li>
          <li>
            ✅ interacting outside `Dialog` should be disabled (clicking the
            "alert me" button shouldn't do anything)
          </li>
          <li>➕</li>
          <li>
            ✅ should be able to dismiss `Dialog` when interacting outside
          </li>
          <li class="ml-6">✅ focus should return to the open button</li>
        </ul>

        <div class="flex flex-col gap-4 mt-12">
          <DummyDialog open-label="Open Dialog" close-label="Close dialog" />

          <input type="text" value="some input" />
          <button @click="handleAlert">Alert me</button>
        </div>
      </div>
    </Variant>

    <Variant title="Popover (fully modal example)">
      <div class="h-[300vh]">
        <ul class="ml-4 list-disc">
          <li>✅ focus should move inside `Popover` when mounted</li>
          <li>✅ focus should be trapped inside `Popover`</li>
          <li>✅ scrolling outside `Popover` should be disabled</li>
          <li>✅ should be able to dismiss `Popover` on pressing escape</li>
          <li class="ml-6">✅ focus should return to the open button</li>
          <li>
            ✅ interacting outside `Popover` should be disabled (clicking the
            "alert me" button shouldn't do anything)
          </li>
          <li>➕</li>
          <li>
            ✅ should be able to dismiss `Popover` when interacting outside
          </li>
          <li class="ml-6">✅ focus should return to the open button</li>
        </ul>

        <div class="flex flex-col gap-4 mt-12">
          <DummyPopover
            open-label="Open Popover"
            close-label="Close Popover"
            disableOutsidePointerEvents
          />

          <input type="text" value="some input" />
          <button @click="handleAlert">Alert me</button>
        </div>
      </div>
    </Variant>
  </Story>
</template>
