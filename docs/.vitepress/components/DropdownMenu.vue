<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'radix-vue'
import { Icon } from '@iconify/vue'

defineProps<{
  icon?: string
  label?: string
  items: {
    text: string
    link?: string
  }[]
}>()
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger class="py-2 px-4 md:px-0 mx-0 md:mx-3 text-sm font-semibold text-muted-foreground hover:text-foreground h-full inline-flex items-center data-[state=open]:text-foreground">
      <Icon
        v-if="icon"
        :icon="icon"
        class="text-base"
      />
      <span v-if="icon">{{ label }}</span>
      <Icon
        icon="lucide:chevron-down"
        class="ml-1 text-lg"
      />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        position="popper"
        align="end"
        :side-offset="2"
        class="z-10 bg-card py-2 border border-muted rounded-xl"
      >
        <DropdownMenuItem
          v-for="item in items"
          :key="item.text"
          :value="item.text"
          as-child
          class="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted  focus:text-foreground focus:bg-muted h-full flex items-center focus-visible:outline focus:outline-transparent"
        >
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
          >
            <span>{{ item.text }}</span>
            <Icon
              icon="lucide:arrow-up-right"
              class="ml-2 text-base"
            />

          </a>
          <div v-else>
            {{ item.text }}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
