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
} from "./";

const currentTrigger = ref("");
</script>

<template>
  <Story title="Navigation Menu">
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
                class="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Learn
                <Icon
                  icon="radix-icons:caret-down"
                  class="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent
                class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto"
              >
                <ul
                  class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]"
                >
                  <li class="row-span-3 grid">
                    <NavigationMenuLink as-child>
                      <a
                        class="focus:shadow-violet7 from-purple9 to-indigo9 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="/"
                      >
                        <svg
                          aria-hidden
                          width="38"
                          height="38"
                          viewBox="0 0 25 25"
                          fill="white"
                        >
                          <path
                            d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
                          ></path>
                          <path d="M12 0H4V8H12V0Z"></path>
                          <path
                            d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
                          ></path>
                        </svg>
                        <div
                          class="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white"
                        >
                          Radix Primitives
                        </div>
                        <p class="text-mauve4 text-[14px] leading-[1.3]">
                          Unstyled, accessible components for React.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink>
                      <a
                        class="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
                      >
                        <div
                          class="text-violet12 mb-[5px] font-medium leading-[1.2]"
                        >
                          Stitches
                        </div>
                        <p class="text-mauve11 leading-[1.4]">
                          CSS-in-JS with best-in-class developer experience.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink>
                      <a
                        class="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
                      >
                        <div
                          class="text-violet12 mb-[5px] font-medium leading-[1.2]"
                        >
                          Stitches
                        </div>
                        <p class="text-mauve11 leading-[1.4]">
                          CSS-in-JS with best-in-class developer experience.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink>
                      <a
                        class="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
                      >
                        <div
                          class="text-violet12 mb-[5px] font-medium leading-[1.2]"
                        >
                          Stitches
                        </div>
                        <p class="text-mauve11 leading-[1.4]">
                          CSS-in-JS with best-in-class developer experience.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                class="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Overview
                <Icon
                  icon="radix-icons:caret-down"
                  class="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent
                class="absolute top-0 left-0 w-full sm:w-auto"
              >
                <ul
                  class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3"
                >
                  <li>
                    <NavigationMenuLink>
                      <a
                        class="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
                      >
                        <div
                          class="text-violet12 mb-[5px] font-medium leading-[1.2]"
                        >
                          Stitches
                        </div>
                        <p class="text-mauve11 leading-[1.4]">
                          CSS-in-JS with best-in-class developer experience.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a
                        class="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
                      >
                        <div
                          class="text-violet12 mb-[5px] font-medium leading-[1.2]"
                        >
                          Stitches
                        </div>
                        <p class="text-mauve11 leading-[1.4]">
                          CSS-in-JS with best-in-class developer experience.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                class="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="https://github.com/radix-ui"
              >
                Github
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuIndicator
              class="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]"
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
