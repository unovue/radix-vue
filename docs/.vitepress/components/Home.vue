<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <section>
    <div class="grid justify-items-center gap-8 p-5 px-3 sm:px-4 md:gap-10 md:px-8">
      <div class="mt-6 grid w-full max-w-4xl justify-items-center gap-[inherit] sm:mt-10 md:mt-20">
        <h1 class="text-pretty text-center text-4xl font-bold sm:text-6xl sm:font-extrabold md:text-7xl text-foreground">
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

  <section class="py-24 max-w-screen-xl mx-auto md:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-5 h-[36rem] lg:h-96 gap-y-4 lg:gap-4">
      <div class="flex flex-col col-span-3 rounded-2xl border border-muted p-10 overflow-hidden relative">
        <div class="font-bold text-lg">
          Accessibility out of the box.
        </div>
        <div class="text-muted-foreground">
          Supports assistive technology
        </div>

        <img
          class="absolute -scale-y-100 -left-40 max-w-none w-[1000px] -bottom-40"
          src="/bg.png"
          alt="Background"
        >
        <div class="w-full h-full flex items-center justify-center relative ">
          <div class="absolute font-medium text-sm text-muted-foreground -translate-x-40 -translate-y-0 rounded-full border border-muted px-5 py-2.5 bg-background/50 backdrop-blur-lg flex items-center gap-2">
            <Icon
              icon="lucide:shield-check"
              class="text-primary text-xl"
            />
            <span>WAI-ARIA compliant</span>
          </div>

          <div class="absolute font-medium text-sm text-muted-foreground translate-x-28 -translate-y-16 rounded-full border border-muted px-5 py-2.5 bg-background/50 backdrop-blur-lg flex items-center gap-2">
            <Icon
              icon="lucide:keyboard"
              class="text-primary text-xl"
            />
            <span>Keyboard navigation</span>
          </div>

          <div class="absolute font-medium text-sm text-muted-foreground -translate-x-20 translate-y-16 rounded-full border border-muted px-5 py-2.5 bg-background/50 backdrop-blur-lg flex items-center gap-2">
            <Icon
              icon="lucide:text-cursor-input"
              class="text-primary text-xl"
            />
            <span>Focus management</span>
          </div>

          <div class="absolute font-medium text-sm text-muted-foreground translate-x-44 translate-y-4 rounded-full border border-muted px-5 py-2.5 bg-background/50 backdrop-blur-lg flex items-center gap-2">
            <Icon
              icon="lucide:view"
              class="text-primary text-xl"
            />
            <span>Screen reader support</span>
          </div>
        </div>

        <div />
      </div>
      <div class="col-span-2 rounded-2xl border border-muted p-10 relative overflow-hidden">
        <div>
          <div class="font-bold text-lg">
            Save time. Ship faster.
          </div>
          <div class="text-muted-foreground">
            40+ Primitive Components
          </div>
        </div>

        <div class="flex flex-col items-center justify-center w-full absolute top-12 left-1/2 -translate-x-1/2">
          <img
            draggable="false"
            class="w-[300px]"
            src="/lightning.svg"
            alt="Lightning"
          >
          <!-- <span class="font-bold text-4xl text-center -mt-20">40+ Components</span> -->
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 h-[36rem] lg:h-96 gap-y-4 lg:gap-4 mt-4">
      <div class="col-span-2 rounded-2xl border border-muted p-10 relative overflow-hidden">
        <div class="absolute flex flex-col">
          <div class="font-bold text-lg z-10 ">
            Developer Experience First.
          </div>
          <div class="text-muted-foreground">
            Unstyled, Customizable, Familiar API
          </div>

          <div class="w-full h-full relative mt-8">
            <div class="prose language-vue">
              <pre
                class="shiki github-dark vp-code"
              ><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#B392F0;"> lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"ts"</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AccordionRoot, AccordionItem } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> 'reka-ui'</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line" />
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">AccordionRoot</span> v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"controlRef"</span><span style="color:#B392F0;"><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:hsl(var(--muted-foreground));">    &lt;!-- css --&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">AccordionItem</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"AccordionItem"</span><span style="color:#B392F0;"> /&gt;</span></span>
<span class="line"><span style="color:hsl(var(--muted-foreground));">    &lt;!-- tailwind --&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">AccordionItem</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"bg-white px-4 py-2"</span><span style="color:#B392F0;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">AccordionRoot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
            </code></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-3 rounded-2xl border border-muted p-10 relative overflow-hidden">
        <div class="z-10 absolute">
          <div class="font-bold text-xl text-white">
            Ready for an international audience
          </div>
          <div class="text-muted-foreground">
            RTL support, Locale, Numbering System
          </div>
        </div>
        <img
          draggable="false"
          class="absolute top-0 left-48 scale-[1.75] dark:mix-blend-lighten hue-rotate-[220deg] saturate-[1.2]"
          src="/globe.jpg"
          alt="Globe image"
        >
      </div>
    </div>
  </section>

  <section class="py-24 sm:py-40 w-full mx-auto px-6 bg-gradient-to-b from-background via-card/80 to-background absolute left-0">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
        <div class="flex flex-col items-center justify-center">
          <div class="text-4xl md:text-6xl font-bold">
            300k+
          </div>
          <div class="mt-1">
            Monthly downloads
          </div>
        </div>

        <div class="flex flex-col items-center justify-center">
          <div class="text-4xl md:text-6xl font-bold">
            100+
          </div>
          <div class="mt-1">
            Contributors
          </div>
        </div>

        <div class="flex flex-col items-center justify-center">
          <div class="text-4xl md:text-6xl font-bold">
            3k+
          </div>
          <div class="mt-1">
            GitHub Stars
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
