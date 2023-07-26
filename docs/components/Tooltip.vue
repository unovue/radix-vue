<script setup lang="ts">
import { TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow } from "radix-vue";

defineProps<{
  content: string;
}>();
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger
      class="text-white hover:text-grass11 focus:text-grass11 shadow-blackA7 focus:bg-green3 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full shadow-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      asChild
    >
      <slot></slot>
    </TooltipTrigger>
    <Teleport to="body">
      <TooltipContent
        class="text-xs data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
      >
        {{ content }}
        <TooltipArrow class="fill-white" size="8" />
      </TooltipContent>
    </Teleport>
  </TooltipRoot>
</template>
