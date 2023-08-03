<script setup lang="ts">
import { PopperRoot, PopperAnchor, PopperContent, PopperArrow } from "@/Popper";
import { DismissableLayer } from "../";
import { FocusScope } from "@/FocusScope";
import { ref } from "vue";

withDefaults(
  defineProps<{
    openLabel?: string;
    closeLabel?: string;
    trapped?: boolean;
    disableOutsidePointerEvents?: boolean;
  }>(),
  {
    openLabel: "Open",
    closeLabel: "Close",
    trapped: true,
    disableOutsidePointerEvents: false,
  }
);

const open = ref(false);
const openButtonRef = ref();
</script>

<template>
  <PopperRoot>
    <PopperAnchor asChild>
      <button
        type="button"
        ref="openButtonRef"
        @click="open = !open"
        class="py-2 rounded bg-gray-500 focus:outline focus:outline-blue-500"
      >
        {{ openLabel }}
      </button>
    </PopperAnchor>

    <Teleport v-if="open" to="body">
      <DismissableLayer
        asChild
        @dismiss="open = false"
        :disable-outside-pointer-events="disableOutsidePointerEvents"
      >
        <FocusScope asChild :trapped="trapped">
          <PopperContent
            class="flex items-start gap-4 bg-white min-w-[200px] min-h-[150px] p-6 rounded-md bg-white"
            :side="'bottom'"
            :side-offset="10"
          >
            <slot></slot>

            <button @click="open = false">{{ closeLabel }}</button>
            <input type="text" value="hello world" />
            <PopperArrow
              :width="10"
              :height="4"
              class="fill-white"
            ></PopperArrow>
          </PopperContent>
        </FocusScope>
      </DismissableLayer>
    </Teleport>
  </PopperRoot>
</template>
