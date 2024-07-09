<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <section>
    <div class="grid justify-items-center gap-8 p-5 px-3 sm:px-4 md:gap-10 md:px-8">
      <div class="mt-6 grid w-full max-w-4xl justify-items-center gap-[inherit] sm:mt-10 md:mt-20">
        <h1 class="text-pretty text-center text-4xl font-medium sm:text-6xl sm:font-extrabold md:text-7xl text-foreground">
          Craft accessible web apps with Vue
        </h1>
        <p class="max-w-[720px] text-pretty text-center text-lg md:text-xl md:leading-8 lg:leading-9 lg:text-2xl text-muted-foreground">
          An open-source library with
          <a
            class="relative inline-block text-foreground font-semibold before:absolute before:top-full before:inset-x-0 before:[translate:0_-0.1em] before:h-[2px] before:bg-primary hover:before:h-[4px]"
            href="/guides/styling"
          >
            unstyled</a>,
          <a
            class="relative inline-block text-foreground font-semibold before:absolute before:top-full before:inset-x-0 before:[translate:0_-0.1em] before:h-[2px] before:bg-primary hover:before:h-[4px]"
            href="/guides/composition"
          >
            primitive
          </a>
          components,
          accompanied by a variety of
          <a
            class="relative inline-block text-foreground font-semibold before:absolute before:top-full before:inset-x-0 before:[translate:0_-0.1em] before:h-[2px] before:bg-primary hover:before:h-[4px]"
            href="/examples"
          >
            examples & use cases
          </a>
          ready to be integrated into your projects.
        </p>
      </div>
      <div class="mb-12 flex max-w-[calc(100%-2rem)] flex-wrap items-center justify-center gap-4 md:mb-20">
        <a
          class="flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 text-primary font-semibold bg-primary/10 hover:bg-primary/20 sm:px-8 sm:text-lg"
          href="/overview/getting-started"
        >
          Get started
        </a>
        <a
          class="group flex h-12 items-center justify-center gap-2 font-semibold text-muted-foreground hover:text-foreground whitespace-nowrap rounded-xl px-4 hover:bg-card"
          href="/components/accordion"
        >
          Explore components
          <Icon icon="lucide:arrow-right" />
        </a>
      </div>
    </div>
  </section>

  <section class="my-24 max-w-screen-lg mx-auto">
    <div class="grid grid-cols-3 h-72 gap-4">
      <div class="col-span-2 rounded-xl border border-muted p-12">
        Save time. Ship faster.
      </div>
      <div class="col-span-1 rounded-xl border border-muted p-12">
        Vue, Nuxt supported
      </div>
    </div>

    <div class="grid grid-cols-3 h-72 gap-4 mt-4">
      <div class="col-span-1 rounded-xl border border-muted p-12">
        Developer Experience First.
      </div>
      <div class="col-span-2 rounded-xl border border-muted p-12">
        Accessibility out of the box.
      </div>
    </div>
  </section>
</template>
