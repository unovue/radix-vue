import { expect, it } from 'vitest'
import * as Radix from './index'

it('should expose the correct components', () => {
  expect(Object.keys(Radix)).toEqual([
    // Accordion
    'AccordionContent',
    'AccordionHeader',
    'AccordionItem',
    'AccordionRoot',
    'AccordionTrigger',

    // Checkbox
    'CheckboxRoot',
    'CheckboxIndicator',

    // Collapsible
    'CollapsibleRoot',
    'CollapsibleTrigger',
    'CollapsibleContent',

    // Switch
    'SwitchRoot',
    'SwitchThumb',

    // Separator
    'Separator',

    // Label
    'Label',

    // Toggle
    'Toggle',

    // Toggle Group
    'ToggleGroupRoot',
    'ToggleGroupItem',

    // AspectRatio
    'AspectRatio',

    // Tabs
    'TabsRoot',
    'TabsList',
    'TabsContent',
    'TabsTrigger',

    // Slider
    'SliderRoot',
    'SliderThumb',
    'SliderTrack',
    'SliderRange',

    // Radio Group
    'RadioGroupRoot',
    'RadioGroupItem',
    'RadioGroupIndicator',

    // Progress
    'ProgressRoot',
    'ProgressIndicator',

    // Dialog
    'DialogRoot',
    'DialogTrigger',
    'DialogPortal',
    'DialogContent',
    'DialogOverlay',
    'DialogClose',
    'DialogTitle',
    'DialogDescription',

    // Alert Dialog
    'AlertDialogRoot',
    'AlertDialogTrigger',
    'AlertDialogPortal',
    'AlertDialogContent',
    'AlertDialogOverlay',
    'AlertDialogCancel',
    'AlertDialogTitle',
    'AlertDialogDescription',
    'AlertDialogAction',

    // Toolbar
    'ToolbarRoot',
    'ToolbarButton',
    'ToolbarLink',
    'ToolbarToggleGroup',
    'ToolbarToggleItem',
    'ToolbarSeparator',

    // Avatar
    'AvatarRoot',
    'AvatarImage',
    'AvatarFallback',

    // Tooltip
    'TooltipRoot',
    'TooltipTrigger',
    'TooltipContent',
    'TooltipArrow',
    'TooltipPortal',
    'TooltipProvider',

    // Hover Card
    'HoverCardRoot',
    'HoverCardTrigger',
    'HoverCardPortal',
    'HoverCardContent',
    'HoverCardArrow',

    // Popover
    'PopoverRoot',
    'PopoverTrigger',
    'PopoverPortal',
    'PopoverContent',
    'PopoverArrow',
    'PopoverClose',
    'PopoverAnchor',

    // Dropdown Menu
    'DropdownMenuRoot',
    'DropdownMenuTrigger',
    'DropdownMenuPortal',
    'DropdownMenuContent',
    'DropdownMenuArrow',
    'DropdownMenuItem',
    'DropdownMenuGroup',
    'DropdownMenuSeparator',
    'DropdownMenuCheckboxItem',
    'DropdownMenuItemIndicator',
    'DropdownMenuLabel',
    'DropdownMenuRadioGroup',
    'DropdownMenuRadioItem',
    'DropdownMenuSub',
    'DropdownMenuSubContent',
    'DropdownMenuSubTrigger',

    // Context Menu
    'ContextMenuRoot',
    'ContextMenuTrigger',
    'ContextMenuPortal',
    'ContextMenuContent',
    'ContextMenuArrow',
    'ContextMenuItem',
    'ContextMenuGroup',
    'ContextMenuSeparator',
    'ContextMenuCheckboxItem',
    'ContextMenuItemIndicator',
    'ContextMenuLabel',
    'ContextMenuRadioGroup',
    'ContextMenuRadioItem',
    'ContextMenuSub',
    'ContextMenuSubContent',
    'ContextMenuSubTrigger',

    // Select
    'SelectRoot',
    'SelectTrigger',
    'SelectPortal',
    'SelectContent',
    'SelectArrow',
    'SelectSeparator',
    'SelectItemIndicator',
    'SelectLabel',
    'SelectGroup',
    'SelectItem',
    'SelectItemText',
    'SelectViewport',
    'SelectScrollUpButton',
    'SelectScrollDownButton',
    'SelectValue',
    'SelectIcon',

    // Menubar
    'MenubarRoot',
    'MenubarTrigger',
    'MenubarPortal',
    'MenubarContent',
    'MenubarArrow',
    'MenubarItem',
    'MenubarGroup',
    'MenubarSeparator',
    'MenubarCheckboxItem',
    'MenubarItemIndicator',
    'MenubarLabel',
    'MenubarRadioGroup',
    'MenubarRadioItem',
    'MenubarSub',
    'MenubarSubContent',
    'MenubarSubTrigger',
    'MenubarMenu',

    // Navigation Menu
    'NavigationMenuContent',
    'NavigationMenuIndicator',
    'NavigationMenuItem',
    'NavigationMenuLink',
    'NavigationMenuList',
    'NavigationMenuRoot',
    'NavigationMenuSub',
    'NavigationMenuTrigger',
    'NavigationMenuViewport',

    // Scroll Area
    'ScrollAreaRoot',
    'ScrollAreaViewport',
    'ScrollAreaScrollbar',
    'ScrollAreaThumb',
    'ScrollAreaCorner',
  ])
})
