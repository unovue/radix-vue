<script setup lang="ts">
import { nextTick, onMounted, reactive, ref, watch } from "vue";
import { DismissableLayer } from "../";
import DismissableBox from "./_DismissableBox.vue";
import { trapFocus } from "@/shared";

const open = ref(false);

const handleClick = () => {
  console.log("click");
};

const state = reactive({
  isEscapeKeyDownPrevented: false,
  isPointerDownOutsidePrevented: false,
  isFocusOutsidePrevented: false,
});

const openWithFocusScope = ref(false);
const openButtonRef = ref<HTMLElement>();
const trappedRef = ref<HTMLElement>();

watch(openWithFocusScope, async () => {
  await nextTick();
  if (trappedRef.value) trapFocus(trappedRef.value);
});
</script>

<template>
  <Story
    title="DismissableLayer/Basic"
    :layout="{ type: 'grid', width: '50%' }"
  >
    <Variant title="default">
      <template #controls>
        <HstCheckbox
          v-model="state.isEscapeKeyDownPrevented"
          title="Dismiss on escape?"
        ></HstCheckbox>
        <HstCheckbox
          v-model="state.isPointerDownOutsidePrevented"
          title="Dismiss on pointer down outside?"
        ></HstCheckbox>
        <HstCheckbox
          v-model="state.isFocusOutsidePrevented"
          title="Dismiss on focus outside?"
        ></HstCheckbox>
      </template>

      <div class="flex flex-col">
        <button @click="open = !open">open</button>

        <DismissableLayer
          v-if="open"
          @dismiss="open = false"
          @escape-key-down="
            (ev) => {
              if (state.isEscapeKeyDownPrevented) ev.preventDefault();
            }
          "
          @pointer-down-outside="
            (ev) => {
              if (state.isPointerDownOutsidePrevented) ev.preventDefault();
            }
          "
          @focus-outside="
            (ev) => {
              if (state.isFocusOutsidePrevented) ev.preventDefault();
            }
          "
          :style="{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            verticalAlign: 'middle',
            width: 400,
            height: 300,
            backgroundColor: 'black',
            borderRadius: 10,
            marginBottom: 20,
          }"
        >
          <div class="p-4 bg-gray-400">
            <input type="text" />
          </div>
        </DismissableLayer>

        <button @click="handleClick">Hey heeey!</button>
      </div>
    </Variant>

    <Variant title="Nested">
      <DismissableBox></DismissableBox>
    </Variant>

    <Variant title="Focus trap">
      <div>
        <button
          ref="openButtonRef"
          @click="openWithFocusScope = !openWithFocusScope"
        >
          open
        </button>

        <DismissableLayer
          v-if="openWithFocusScope"
          asChild
          disableOutsidePointerEvents
          @dismiss="openWithFocusScope = false"
          @pointer-down-outside="
            (ev) => {
              if (ev.target === openButtonRef) ev.preventDefault();
            }
          "
        >
          <div
            ref="trappedRef"
            class="w-[400px] h-[300px] bg-black rounded flex items-center justify-center"
          >
            <input type="text" />
          </div>
        </DismissableLayer>
      </div>
    </Variant>
  </Story>
</template>
