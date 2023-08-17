<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import DummyDialog from "./_DummyDialog.vue";
import DummyPopover from "./_DummyPopover.vue";

const handleAlert = () => {
  window.alert("Alert");
};
</script>

<template>
  <Story
    title="DismissableLayer/PopoverNested"
    :layout="{ type: 'grid', width: '50%' }"
  >
    <Variant title="Dialog (fully modal example)">
      <div class="h-[300vh]">
        <ul class="list-disc ml-4">
          <li>
            ✅ dismissing a `Popover` by pressing escape should only dismiss
            that given `Popover`, not its parents
          </li>
          <li>
            ✅ interacting outside the blue `Popover` should only dismiss itself
            and not its parents
          </li>
          <li>
            ✅ interacting outside the red `Popover` should dismiss itself and
            the black one
          </li>
          <li>✅ unless the click wasn't outside the black one</li>
          <li>
            ✅ when the blue `Popover` is open, there should be{' '}
            <span class="font-semibold">NO</span> text cursor above the red or
            black inputs
          </li>
          <li>
            ✅ when the red `Popover` is open, there should be a text cursor
            above the black input but not the one on the page behind
          </li>
        </ul>

        <div class="flex flex-col gap-4 mt-12">
          <DummyPopover disableOutsidePointerEvents>
            <DummyPopover
              color="tomato"
              openLabel="Open red"
              closeLabel="Close red"
            >
              <DummyPopover
                color="royalblue"
                openLabel="Open blue"
                closeLabel="Close blue"
                disableOutsidePointerEvents
              >
              </DummyPopover>
            </DummyPopover>
          </DummyPopover>

          <input type="text" value="some input" />
          <button @click="handleAlert">Alert me</button>
        </div>
      </div>
    </Variant>
  </Story>
</template>
