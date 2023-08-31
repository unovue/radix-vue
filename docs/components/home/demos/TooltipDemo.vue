<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipRoot, TooltipTrigger, TooltipPortal } from 'radix-vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const toggleState = ref(false)
</script>

<template>
  <div class="absolute text-sm left-4 top-3">
    <p>Value: {{ toggleState ? "checked" : "unchecked" }}</p>
    <button
      class="px-2 py-1 duration-100 transform rounded-md bg-white/20 active:scale-90 hover:bg-white/40 active:bg-white/20"
      @click="toggleState = !toggleState"
    >
      {{ toggleState ? "Close" : "Open" }}
    </button>
  </div>
  <TooltipRoot v-model:open="toggleState">
    <TooltipTrigger
      class="text-violet11 shadow-blackA7 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    >
      <Icon icon="radix-icons:plus" />
    </TooltipTrigger>
    <TooltipPortal to="body">
      <TooltipContent
        as-child
        class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
      >
        <ul>
          Add to library
          <TooltipArrow class="bg-white" size="8" />
        </ul>
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
