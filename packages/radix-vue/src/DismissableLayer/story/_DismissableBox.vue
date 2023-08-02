<script setup lang="ts">
import { ref } from "vue";
import { DismissableLayer } from "../";
import DismissableBox from "./_DismissableBox.vue";

const open = ref(false);
const buttonRef = ref<HTMLElement>();
</script>

<template>
  <DismissableLayer v-bind="{ ...$attrs }">
    <div>
      <button ref="buttonRef" type="button" @click="open = !open">
        {{ open ? "Close" : "Open" }} new layer
      </button>
    </div>

    <DismissableBox
      v-if="open"
      @dismiss="open = false"
      @focusOutside.prevent
      @pointerDownOutside="
        (ev) => {
          if (ev.target === buttonRef) {
            ev.preventDefault();
          }
        }
      "
    >
    </DismissableBox>
  </DismissableLayer>
</template>
