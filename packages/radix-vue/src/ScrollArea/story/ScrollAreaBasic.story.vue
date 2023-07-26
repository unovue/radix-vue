<script setup lang="ts">
import ScrollAreaStory from "./_ScrollAreaStory.vue";
import ScrollAreaCopy from "./_ScrollAreaCopy.vue";
import { reactive } from "vue";

type Type = "auto" | "always" | "scroll" | "hover";

const state = reactive({
  type: "hover" as Type,
});
</script>

<template>
  <Story title="Scroll Area/Basic" :layout="{ type: 'single' }">
    <Variant title="Basic">
      <div class="flex items-center justify-center my-20">
        <ScrollAreaStory :type="state.type">
          <ScrollAreaCopy v-for="i in 30" :key="i"></ScrollAreaCopy>
        </ScrollAreaStory>
      </div>

      <template #controls>
        Type:
        <select v-model="state.type" name="type">
          <option></option>
          <option>always</option>
          <option>auto</option>
          <option>scroll</option>
          <option>hover</option>
        </select>
      </template>
    </Variant>
  </Story>
</template>
