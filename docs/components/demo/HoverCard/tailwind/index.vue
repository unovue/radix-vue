<script setup lang="ts">
import { ref } from 'vue'
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'

const hoverState = ref(false)
</script>

<template>
  <HoverCardRoot v-model:open="hoverState">
    <HoverCardTrigger
      class="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
      href="https://twitter.com/radix_ui"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        class="block h-[45px] w-[45px] rounded-full"
        src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
        alt="Radix UI"
      >
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent
        class="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        :side-offset="5"
      >
        <div class="flex flex-col gap-[7px]">
          <img
            class="block h-[60px] w-[60px] rounded-full"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            alt="Radix UI"
          >
          <div class="flex flex-col gap-[15px]">
            <div>
              <div class="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                Radix
              </div>
              <div class="text-mauve10 m-0 text-[15px] leading-[1.5]">
                @radix_ui
              </div>
            </div>
            <div class="text-mauve12 m-0 text-[15px] leading-[1.5]">
              Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source.
            </div>
            <div class="flex gap-[15px]">
              <div class="flex gap-[5px]">
                <div class="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                  0
                </div>
                <div class="text-mauve10 m-0 text-[15px] leading-[1.5]">
                  Following
                </div>
              </div>
              <div class="flex gap-[5px]">
                <div class="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                  2,900
                </div>
                <div class="text-mauve10 m-0 text-[15px] leading-[1.5]">
                  Followers
                </div>
              </div>
            </div>
          </div>
        </div>

        <HoverCardArrow
          class="fill-white"
          :width="8"
        />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
