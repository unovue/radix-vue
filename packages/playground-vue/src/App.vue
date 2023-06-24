<script setup lang="ts">
import Card from "./components/Card.vue";
import CheckboxDemo from "./components/Demo/CheckboxDemo.vue";
import CollapsibleDemo from "./components/Demo/CollapsibleDemo.vue";
import LabelDemo from "./components/Demo/LabelDemo.vue";
import SeparatorDemo from "./components/Demo/SeparatorDemo.vue";
import SwitchDemo from "./components/Demo/SwitchDemo.vue";
import ToggleDemo from "./components/Demo/ToggleDemo.vue";
import ToggleGroupDemo from "./components/Demo/ToggleGroupDemo.vue";
import AspectRatioDemo from "./components/Demo/AspectRatioDemo.vue";
import TabsDemo from "./components/Demo/TabsDemo.vue";
import SliderDemo from "./components/Demo/SliderDemo.vue";
import ProgressDemo from "./components/Demo/ProgressDemo.vue";
import DialogDemo from "./components/Demo/DialogDemo.vue";
import AlertDialogDemo from "./components/Demo/AlertDialogDemo.vue";
import RadioGroupDemo from "./components/Demo/RadioGroupDemo.vue";

</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-6xl w-full grid grid-cols-3 gap-4 pt-40">
      <Card>
        <AspectRatioDemo />
      </Card>
      <Card>
        <CheckboxDemo />
      </Card>
      <Card>
        <CollapsibleDemo />
      </Card>
      <Card>
        <LabelDemo />
      </Card>
      <Card>
        <SeparatorDemo />
      </Card>
      <Card>
        <SwitchDemo />
      </Card>
      <Card>
        <ToggleDemo />
      </Card>
      <Card>
        <ToggleGroupDemo />
      </Card>
      <Card>
        <TabsDemo />
      </Card>
      <Card>
        <SliderDemo />
      </Card>
      <Card>
        <ProgressDemo />
      </Card>
      <Card>
        <DialogDemo />
      </Card>
      <Card>
        <AlertDialogDemo />
      </Card>
      <Card>
        <RadioGroupDemo />
      </Card>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-black text-white;
}
</style>
