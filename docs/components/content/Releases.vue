<script setup lang="ts">
import {format} from "date-fns"
function formatDate(dateString) {
    const date = new Date(dateString);
    return format(date, 'MMMM d, yyyy');
  }
</script>

<template>
  <div>
    <GithubReleases v-slot="{ releases }">
      <div v-for="release in releases" :key="release.name" class="flex flex-col">
        <div class="mt-16 -mb-6 flex items-center gap-3">
          <ProseH2 class="mt-0 mb-0">
            {{ formatDate(release.date) }}
          </ProseH2>
          <div class="rounded-full bg-neutral-800 px-2">{{ release.name }}</div>
        </div>
        <div>
          <ProseH3 class="sr-only">Description</ProseH3>

          <ContentRenderer :value="release">
            <template #empty>
              <p>No description provided</p>
            </template>
          </ContentRenderer>
        </div>
      </div>
    </GithubReleases>
  </div>
</template>
