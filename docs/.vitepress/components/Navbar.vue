<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger, Separator } from 'radix-vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import DropdownMenu from '../components/DropdownMenu.vue'
import { useData, useRoute } from 'vitepress'
import { ref, toRefs, watch } from 'vue'

const { path } = toRefs(useRoute())
const { theme } = useData()

const isPopoverOpen = ref(false)

watch(path, () => {
  isPopoverOpen.value = false
})
</script>

<template>
  <nav class="hidden lg:flex items-center">
    <template
      v-for="nav in theme.nav"
      :key="nav.text"
    >
      <a
        v-if="nav.link"
        :href="nav.link"
        class="py-2 mx-3 text-sm font-semibold text-muted-foreground hover:text-foreground h-full inline-flex items-center"
      >
        {{ nav.text }}
      </a>
      <DropdownMenu
        v-else-if="nav.items"
        :label="nav.text"
        :items="nav.items"
      />
    </template>

    <Separator
      class="bg-muted h-4 w-px mx-4"
      decorative
      orientation="vertical"
    />
    <ThemeToggle />

    <Separator
      class="bg-muted h-4 w-px mx-4"
      decorative
      orientation="vertical"
    />

    <a
      v-for="link in theme.socialLinks"
      :key="link.link"
      :href="link.link"
      :aria-label="link.icon"
      target="_blank"
      class="w-9 h-9 bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-center rounded-lg text-xl"
    >
      <Icon :icon="`simple-icons:${link.icon}`" />
    </a>
  </nav>

  <div class="lg:hidden">
    <PopoverRoot v-model:open="isPopoverOpen">
      <PopoverTrigger class="p-2 rounded-lg">
        <Icon
          icon="lucide:ellipsis"
          class="text-lg"
        />
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :side-offset="5"
          align="end"
          class="rounded-xl z-10 py-4 w-[180px] bg-card border border-muted shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade"
        >
          <nav class="flex flex-col">
            <template
              v-for="nav in theme.nav"
              :key="nav.text"
            >
              <a
                v-if="nav.link"
                :href="nav.link"
                class="py-2 px-4 text-sm font-semibold text-muted-foreground hover:text-foreground h-full inline-flex items-center"
              >
                {{ nav.text }}
              </a>
              <DropdownMenu
                v-else-if="nav.items"
                :label="nav.text"
                :items="nav.items"
              />
            </template>

            <Separator
              class="bg-muted h-px w-full my-2"
              decorative
              orientation="horizontal"
            />

            <div class="flex items-center text-sm justify-between px-4">
              <label
                for="theme-toggle"
                class="font-semibold text-muted-foreground"
              >Appearance</label>
              <ThemeToggle />
            </div>

            <Separator
              class="bg-muted h-px w-full my-2"
              decorative
              orientation="horizontal"
            />

            <div class="flex items-center gap-2 px-4">
              <a
                v-for="link in theme.socialLinks"
                :key="link.link"
                :href="link.link"
                :aria-label="link.icon"
                target="_blank"
                class="w-9 h-9 bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-center rounded-lg text-xl"
              >
                <Icon :icon="`simple-icons:${link.icon}`" />
              </a>
            </div>
          </nav>
        </PopoverContent>
      </popoverportal>
    </PopoverRoot>
  </div>
</template>
