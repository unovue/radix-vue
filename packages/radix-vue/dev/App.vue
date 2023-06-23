<script setup lang="ts">
import {
  CoolCounter,
  CoolButton,
  type CoolButtonProps,
  type CoolButtonColor,
} from "../src";

const bgColor: CoolButtonColor = "blue";
</script>

<template>
  <CoolCounter :startingCount="10" />
  <CoolButton :backgroundColor="bgColor">
    Hello, I'm a cool button!
  </CoolButton>
</template>
