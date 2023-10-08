<script setup lang="ts">

</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="max-w-6xl w-full grid grid-cols-3 gap-4 pt-40 pb-40">
      <Card>
        <Accordion />
      </Card>
      <Card>
        <AlertDialog />
      </Card>
      <Card>
        <AspectRatio />
      </Card>
      <Card class="col-span-2">
        <NavigationMenu />
      </Card>
      <Card>
        <Collapsible />
      </Card>
      <Card>
        <Avatar />
      </Card>
      <Card>
        <Checkbox />
      </Card>
      <Card>
        <Combobox />
      </Card>
      <Card>
        <ScrollArea />
      </Card>
      <Card class="col-span-2">
        <ContextMenu />
      </Card>
      <Card class="col-span-2">
        <Dialog />
      </Card>
      <Card>
        <DropdownMenu />
      </Card>
      <Card>
        <Menubar />
      </Card>
      <Card>
        <HoverCard />
      </Card>
      <Card>
        <Label />
      </Card>
      <Card>
        <Popover />
      </Card>
      <Card>
        <Progress />
      </Card>
      <Card>
        <RadioGroup />
      </Card>
      <Card>
        <Select />
      </Card>
      <!-- <Card>
        <SelectMultiple />
      </Card> -->
      <Card>
        <Separator />
      </Card>
      <Card>
        <Slider />
      </Card>
      <Card>
        <Switch />
      </Card>
      <Card>
        <Tabs />
      </Card>
      <Card>
        <Toggle />
      </Card>
      <Card>
        <ToggleGroup />
      </Card>
      <Card class="col-span-2">
        <Toolbar />
      </Card>
      <Card>
        <Tooltip />
      </Card>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-black text-white;
}
</style>
