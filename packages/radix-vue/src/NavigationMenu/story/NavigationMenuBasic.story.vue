<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import {
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../";
import NavigationMenuListItem from "./_NavigationMenuListItem.vue";
import LinkGroup from "./_LinkGroup.vue";

const currentTrigger = ref("");
</script>

<template>
  <Story title="Navigation Menu/Basic">
    <Variant title="Default">
      <div class="w-full h-[600px]">
        <NavigationMenuRoot
          v-model="currentTrigger"
          class="relative z-[1] flex w-full justify-center"
        >
          <NavigationMenuList
            class="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]"
          >
            <NavigationMenuItem>
              <NavigationMenuTrigger
                class="text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Learn
                <Icon
                  icon="radix-icons:caret-down"
                  class="text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenuTrigger>

              <NavigationMenuContent
                class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto"
              >
                <LinkGroup
                  :items="[
                    'Fusce pellentesque',
                    'Aliquam porttitor',
                    'Pellentesque',
                    'Fusce pellentesque',
                    'Aliquam porttitor',
                    'Pellentesque',
                  ]"
                ></LinkGroup>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                class="text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Overview
                <Icon
                  icon="radix-icons:caret-down"
                  class="text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent
                class="absolute top-0 left-0 w-full sm:w-auto"
              >
                <ul
                  class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3"
                >
                  <NavigationMenuListItem
                    title="Introduction"
                    href="/docs/primitives/overview/introduction"
                  >
                    Build high-quality, accessible design systems and web apps.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Getting started"
                    href="/docs/primitives/overview/getting-started"
                  >
                    A quick tutorial to get you up and running with Radix
                    Primitives.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Styling"
                    href="/docs/primitives/guides/styling"
                  >
                    Unstyled and compatible with any styling solution.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Animation"
                    href="/docs/primitives/guides/animation"
                  >
                    Use CSS keyframes or any animation library of your choice.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Accessibility"
                    href="/docs/primitives/overview/accessibility"
                  >
                    Tested in a range of browsers and assistive technologies.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Releases"
                    href="/docs/primitives/overview/releases"
                  >
                    Radix Primitives releases and their changelogs.
                  </NavigationMenuListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                class="text-grass11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="https://github.com/radix-ui"
              >
                Github
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuIndicator
              class="data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]"
            >
              <div
                class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white"
              />
            </NavigationMenuIndicator>
          </NavigationMenuList>

          <div
            class="perspective-[2000px] absolute top-full left-0 flex w-full justify-center"
          >
            <NavigationMenuViewport
              class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"
            />
          </div>
        </NavigationMenuRoot>
      </div>
    </Variant>
  </Story>
</template>
