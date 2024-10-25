<script setup lang="ts">
import { useData } from 'vitepress'
import CardLink from '../components/CardLink.vue'
import { VPButton } from 'vitepress/theme'

const { frontmatter } = useData()
</script>

<template>
  <div class="content px-6 sm:px-[48px] lg:px-[64px] py-6 sm:py-12">
    <div class="mx-auto w-full container max-w-[1152px]">
      <div class=" my-16 md:my-24 flex flex-col items-center text-center">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold animate-text bg-gradient-to-r from-green-200 via-green-300 to-blue-400 bg-clip-text text-transparent ">
          Showcase
        </h1>
        <h2 class="mt-2 md:mt-6 md:text-2xl font-medium text-[var(--vp-c-text-2)] max-w-[480px]">
          {{ frontmatter.description }}
        </h2>

        <VPButton
          text="Add Showcase"
          class="mt-6"
          target="_blank"
          href="https://github.com/unovue/radix-vue/blob/main/docs/content/showcase.md"
        />
      </div>

      <div class="flex flex-col gap-8 md:gap-12">
        <div>
          <h3 class="md:text-lg font-semibold ml-2 inline-flex items-center group">
            Packages
          </h3>
          <div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardLink
              v-for="item in frontmatter.packages"
              :key="item.title"
              v-bind="item"
            />
          </div>
        </div>

        <div>
          <h3 class="md:text-lg font-semibold ml-2 inline-flex items-center group">
            Projects
          </h3>
          <div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardLink
              v-for="item in frontmatter.projects"
              :key="item.title"
              v-bind="item"
            />
          </div>
        </div>

        <div v-if="frontmatter.starters && frontmatter.starters.length">
          <h3 class="md:text-lg font-semibold ml-2 inline-flex items-center group">
            Starters
          </h3>
          <div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
