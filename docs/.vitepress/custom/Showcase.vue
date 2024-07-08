<script setup lang="ts">
import { useData } from 'vitepress'
import CardLink from '../components/CardLink.vue'

const { frontmatter } = useData()
</script>

<template>
  <div class="content pb-20">
    <div class="mx-auto w-full">
      <div class=" my-16 md:my-26 flex flex-col">
        <h1 class="text-4xl lg:text-5xl font-bold text-primary">
          Showcase
        </h1>
        <h2 class="mt-2 md:mt-6 md:text-xl font-medium text-foreground max-w-[640px]">
          {{ frontmatter.description }}
        </h2>

        <a
          class="mt-6 text-sm font-bold px-5 py-3 rounded-xl text-white w-max bg-gradient-to-b from-primary to-[#1aa479]  hover:outline-[#14B47133] hover:outline-[4px] hover:outline  focus:outline-[#14B47133] focus:outline-[4px] focus:outline outline-offset-0 "
          target="_blank"
          href="https://github.com/radix-vue/radix-vue/blob/main/docs/content/showcase.md"
        >
          Add Showcase
        </a>
      </div>

      <div class="flex flex-col gap-8 md:gap-12">
        <div>
          <h3 class="text-primary md:text-lg font-bold ml-2 inline-flex items-center group">
            Packages
          </h3>
          <div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardLink
              v-for="item in frontmatter.packages"
              :key="item.title"
              v-bind="item"
            />
          </div>
        </div>

        <div>
          <h3 class="text-primary md:text-lg font-bold ml-2 inline-flex items-center group">
            Projects
          </h3>
          <div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardLink
              v-for="item in frontmatter.projects"
              :key="item.title"
              v-bind="item"
            />
          </div>
        </div>

        <div v-if="frontmatter.starters && frontmatter.starters.length">
          <h3 class="text-primary md:text-lg font-bold ml-2 inline-flex items-center group">
            Starters
          </h3>
          <div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardLink
              v-for="item in frontmatter.starters"
              :key="item.title"
              v-bind="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
