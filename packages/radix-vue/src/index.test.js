import * as Radix from "./index";
import { expect, it } from "vitest";

it("should expose the correct components", () => {
  expect(Object.keys(Radix)).toEqual([
    // Accordion
    "AccordionContent",
    "AccordionHeader",
    "AccordionItem",
    "AccordionRoot",
    "AccordionTrigger",

    // Checkbox
    "CheckboxIndicator",
    "CheckboxRoot",

    // Collapsible
    "CollapsibleRoot",
    "CollapsibleTrigger",
    "CollapsibleContent",

    // Switch
    "SwitchRoot",
    "SwitchThumb",

    // Separator
    "Separator",

    // Label
    "Label",

    // Toggle
    "Toggle",

    // Toggle Group
    "ToggleGroupRoot",
    "ToggleGroupItem",

    // AspectRatio
    "AspectRatio",

    // Tabs
    "TabsRoot",
    "TabsList",
    "TabsContent",
    "TabsTrigger",

    // Slider
    "SliderRoot",
    "SliderThumb",
    "SliderTrack",
    "SliderRange",

    // Radio Group
    "RadioGroupRoot",
    "RadioGroupItem",
    "RadioGroupIndicator",

    // Progress
    "ProgressRoot",
    "ProgressIndicator",

    // Dialog
    "DialogRoot",
    "DialogTrigger",
    "DialogContent",
    "DialogClose",
    "DialogPortal",
    "DialogOverlay",
    "DialogTitle",
    "DialogDescription",

    // Alert Dialog
    "AlertDialogRoot",
    "AlertDialogTrigger",
    "AlertDialogContent",
    "AlertDialogCancel",
    "AlertDialogPortal",
    "AlertDialogOverlay",
    "AlertDialogTitle",
    "AlertDialogDescription",
    "AlertDialogAction",

    // Toolbar
    "ToolbarRoot",
    "ToolbarButton",
    "ToolbarLink",
    "ToolbarToggleGroup",
    "ToolbarToggleItem",
    "ToolbarSeparator",

    // Avatar
    "AvatarRoot",
    "AvatarImage",
    "AvatarFallback",

    // Tooltip
    "TooltipArrow",
    "TooltipContent",
    "TooltipPortal",
    "TooltipRoot",
    "TooltipTrigger",

    // Hover Card
    "HoverCardArrow",
    "HoverCardContent",
    "HoverCardPortal",
    "HoverCardRoot",
    "HoverCardTrigger",

    // Popover
    "PopoverRoot",
    "PopoverTrigger",
    "PopoverPortal",
    "PopoverContent",
    "PopoverArrow",
    "PopoverClose",

    // Dropdown Menu
    "DropdownMenuArrow",
    "DropdownMenuContent",
    "DropdownMenuGroup",
    "DropdownMenuItem",
    "DropdownMenuPortal",
    "DropdownMenuRoot",
    "DropdownMenuSeparator",
    "DropdownMenuTrigger",
    "DropdownMenuCheckboxItem",
    "DropdownMenuItemIndicator",
    "DropdownMenuLabel",
    "DropdownMenuRadioGroup",
    "DropdownMenuRadioItem",
    "DropdownMenuSub",
    "DropdownMenuSubContent",
    "DropdownMenuSubTrigger",

    // Context Menu
    "ContextMenuArrow",
    "ContextMenuContent",
    "ContextMenuGroup",
    "ContextMenuItem",
    "ContextMenuPortal",
    "ContextMenuRoot",
    "ContextMenuSeparator",
    "ContextMenuTrigger",
    "ContextMenuCheckboxItem",
    "ContextMenuItemIndicator",
    "ContextMenuLabel",
    "ContextMenuRadioGroup",
    "ContextMenuRadioItem",
    "ContextMenuSub",
    "ContextMenuSubContent",
    "ContextMenuSubTrigger",

    // Select
    "SelectArrow",
    "SelectContent",
    "SelectPortal",
    "SelectRoot",
    "SelectSeparator",
    "SelectTrigger",
    "SelectItemIndicator",
    "SelectLabel",
    "SelectGroup",
    "SelectItem",

    // Menubar
    "MenubarArrow",
    "MenubarContent",
    "MenubarGroup",
    "MenubarItem",
    "MenubarPortal",
    "MenubarRoot",
    "MenubarSeparator",
    "MenubarTrigger",
    "MenubarCheckboxItem",
    "MenubarItemIndicator",
    "MenubarLabel",
    "MenubarRadioGroup",
    "MenubarRadioItem",
    "MenubarSub",
    "MenubarSubContent",
    "MenubarSubTrigger",
    "MenubarMenu",

    // Navigation Menu
    "NavigationMenuLink",
    "NavigationMenuIndicator",
    "NavigationMenuContent",
    "NavigationMenuItem",
    "NavigationMenuList",
    "NavigationMenuRoot",
    "NavigationMenuTrigger",
    "NavigationMenuViewport",

    // Scroll Area
    "ScrollAreaRoot",
    "ScrollAreaViewport",
    "ScrollAreaScrollbar",
    "ScrollAreaThumb",
  ]);
});
