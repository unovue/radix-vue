<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue'
import { Icon } from '@iconify/vue'
import './styles.css'
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger
        class="IconButton"
      >
        <Icon icon="radix-icons:plus" />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          as-child
          class="TooltipContent"
          :side-offset="5"
        >
          <ul>
            Add to library
            <TooltipArrow class="TooltipArrow" size="8" />
          </ul>
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
