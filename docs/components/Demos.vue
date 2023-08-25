<script setup lang="ts">
import AccordionDemo from './demo/Accordion/index.vue'
import AlertDialogDemo from './demo/AlertDialog/index.vue'
import AspectRatioDemo from './demo/AspectRatio/index.vue'
import AvatarDemo from './demo/Avatar/index.vue'
import CheckboxDemo from './demo/Checkbox/index.vue'
import CollapsibleDemo from './demo/Collapsible/index.vue'
import ContextMenuDemo from './demo/ContextMenu/index.vue'
import DialogDemo from './demo/Dialog/index.vue'
import DropdownMenuDemo from './demo/DropdownMenu/index.vue'
import HoverCardDemo from './demo/HoverCard/index.vue'
import LabelDemo from './demo/Label/index.vue'
import MenubarDemo from './demo/Menubar/index.vue'
import NavigationMenuDemo from './demo/NavigationMenu/index.vue'
import PopoverDemo from './demo/Popover/index.vue'
import ProgressDemo from './demo/Progress/index.vue'
import RadioGroupDemo from './demo/RadioGroup/index.vue'
import ScrollAreaDemo from './demo/ScrollArea/index.vue'
import SelectDemo from './demo/Select/index.vue'
import SeparatorDemo from './demo/Separator/index.vue'
import SliderDemo from './demo/Slider/index.vue'
import SwitchDemo from './demo/Switch/index.vue'
import TabsDemo from './demo/Tabs/index.vue'
import ToggleDemo from './demo/Toggle/index.vue'
import ToggleGroupDemo from './demo/ToggleGroup/index.vue'
import ToolbarDemo from './demo/Toolbar/index.vue'
import TooltipDemo from './demo/Tooltip/index.vue'

import DemoContainer from './DemoContainer.vue'
</script>

<template>
  <div>
    <DemoContainer title="accordion">
      <AccordionDemo />
    </DemoContainer>
    <DemoContainer title="alert dialog">
      <AlertDialogDemo />
    </DemoContainer>
    <DemoContainer title="aspect ratio">
      <AspectRatioDemo />
    </DemoContainer>
    <DemoContainer title="avatar">
      <AvatarDemo />
    </DemoContainer>
    <DemoContainer title="checkbox">
      <CheckboxDemo />
    </DemoContainer>
    <DemoContainer title="collapsible">
      <CollapsibleDemo />
    </DemoContainer>
    <DemoContainer title="context menu">
      <ContextMenuDemo />
    </DemoContainer>
    <DemoContainer title="dialog">
      <DialogDemo />
    </DemoContainer>
    <DemoContainer title="dropdown menu">
      <DropdownMenuDemo />
    </DemoContainer>
    <DemoContainer title="hover card">
      <HoverCardDemo />
    </DemoContainer>
    <DemoContainer title="label">
      <LabelDemo />
    </DemoContainer>
    <DemoContainer title="menubar">
      <MenubarDemo />
    </DemoContainer>
    <DemoContainer title="navigation menu">
      <NavigationMenuDemo />
    </DemoContainer>
    <DemoContainer title="popover">
      <PopoverDemo />
    </DemoContainer>
    <DemoContainer title="progress">
      <ProgressDemo />
    </DemoContainer>
    <DemoContainer title="radio group">
      <RadioGroupDemo />
    </DemoContainer>
    <DemoContainer title="scroll area">
      <ScrollAreaDemo />
    </DemoContainer>
    <DemoContainer title="select">
      <SelectDemo />
    </DemoContainer>
    <DemoContainer title="separator">
      <SeparatorDemo />
    </DemoContainer>
    <DemoContainer title="slider">
      <SliderDemo />
    </DemoContainer>
    <DemoContainer title="switch">
      <SwitchDemo />
    </DemoContainer>
    <DemoContainer title="tabs">
      <TabsDemo />
    </DemoContainer>
    <DemoContainer title="toggle">
      <ToggleDemo />
    </DemoContainer>
    <DemoContainer title="toggle group">
      <ToggleGroupDemo />
    </DemoContainer>
    <DemoContainer title="toolbar">
      <ToolbarDemo />
    </DemoContainer>
    <DemoContainer title="tooltip">
      <TooltipDemo />
    </DemoContainer>
  </div>
</template>
