<script setup lang="ts">
import { TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from "radix-vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger
      class="text-green-800 shadow-blackA7 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    >
      <Icon icon="radix-icons:plus" />
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent
        asChild
        class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-green-800 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
      >
        <ul>
          Add to library
          <TooltipArrow class="bg-white" size="8" />
        </ul>
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
