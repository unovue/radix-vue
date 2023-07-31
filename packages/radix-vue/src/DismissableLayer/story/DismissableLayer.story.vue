<script setup lang="ts">
import { ref } from "vue";
import { DismissableLayer } from "../";

const open = ref(false);

const handleClick = () => {
  console.log("click");
};
</script>

<template>
  <Story title="DismissableLayer/Basic" :layout="{ type: 'single' }">
    <Variant title="default">
      <div class="flex flex-col">
        <button @click="open = !open">open</button>

        <DismissableLayer
          v-if="open"
          @dismiss="open = false"
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
  </Story>
</template>
