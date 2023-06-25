<script setup lang="ts">
import { TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from "radix-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const toggleState = ref(true);
</script>

<template>
  <div class="absolute left-4 top-3 text-sm">
    <p>{{ toggleState ? "checked" : "uncheked" }}</p>
  </div>
  <TooltipRoot v-model="toggleState">
    <TooltipTrigger class="text-violet11 shadow-blackA7 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
        <Icon icon="lucide:plus" />
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent
        class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
        sideOffset={5}>
        Add to library
        <TooltipArrow class="fill-white" />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
