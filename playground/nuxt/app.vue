<script setup lang="ts">
import Card from "./components/Card.vue";
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-6xl w-full grid grid-cols-3 gap-4 pt-40 pb-40">
      <Card>
        <AccordionDemo />
      </Card>
      <Card>
        <AlertDialogDemo />
      </Card>
      <Card>
        <AspectRatioDemo />
      </Card>
      <Card>
        <AvatarDemo />
      </Card>
      <Card>
        <CheckboxDemo />
      </Card>
      <Card>
        <CollapsibleDemo />
      </Card>
      <Card>
        <ScrollAreaDemo />
      </Card>
      <Card class="col-span-2">
        <ContextMenuDemo />
      </Card>
      <Card class="col-span-2">
        <DialogDemo />
      </Card>
      <Card>
        <DropdownMenuDemo />
      </Card>
      <Card>
        <MenubarDemo />
      </Card>

      <Card>
        <HoverCardDemo />
      </Card>
      <Card>
        <LabelDemo />
      </Card>
      <Card>
        <PopoverDemo />
      </Card>
      <Card>
        <ProgressDemo />
      </Card>
      <Card>
        <RadioGroupDemo />
      </Card>
      <Card>
        <SelectDemo />
      </Card>
      <Card>
        <SelectMultipleDemo />
      </Card>
      <Card>
        <SeparatorDemo />
      </Card>
      <Card>
        <SliderDemo />
      </Card>
      <Card>
        <SwitchDemo />
      </Card>
      <Card>
        <TabsDemo />
      </Card>
      <Card>
        <ToggleDemo />
      </Card>
      <Card>
        <ToggleGroupDemo />
      </Card>
      <Card class="col-span-2">
        <ToolbarDemo />
      </Card>
      <Card>
        <TooltipDemo />
      </Card>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-black text-white;
}

[data-radix-popper-content-wrapper] {
  @apply z-[1000];
}
</style>
