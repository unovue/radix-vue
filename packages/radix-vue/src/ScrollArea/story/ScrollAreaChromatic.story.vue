<script setup lang="ts">
import ScrollAreaStory from './_ScrollAreaStory.vue'
import ScrollAreaCopy from './_ScrollAreaCopy.vue'
</script>

<template>
  <Story title="Scroll Area/Chromatic" :layout="{ type: 'grid', width: '50%' }">
    <Variant auto-props-disabled title="Min thumb size">
      <ScrollAreaStory type="always" vertical horizontal>
        <ScrollAreaCopy v-for="i in 100" :key="i" style="width: 10000px" />
      </ScrollAreaStory>
    </Variant>

    <Variant auto-props-disabled title="RTL (prop)">
      <ScrollAreaStory type="always" dir="rtl" vertical horizontal>
        <ScrollAreaCopy v-for="i in 10" :key="i" />
      </ScrollAreaStory>
    </Variant>

    <!-- TODO: we dont have DirectionProvider atm -->
    <!-- <Variant auto-props-disabled title="RTL (inherited)">
      <ScrollAreaStory :type="'always'" :dir="'rtl'" vertical horizontal>
        <ScrollAreaCopy v-for="i in 10" :key="i"></ScrollAreaCopy>
      </ScrollAreaStory>
    </Variant> -->
  </Story>
</template>
