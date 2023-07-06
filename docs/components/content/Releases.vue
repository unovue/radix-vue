<template>
  <div>
    <GithubReleases v-slot="{ releases }">
      <div v-for="release in releases" :key="release.name" class="flex flex-col">
        <div class="pt-12">
          <h2
            class="font-bold text-2xl px-2 py-1 bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-600 w-max"
          >
            {{ release.name }}
          </h2>
        </div>
        <div>
          <h3 class="sr-only">Description</h3>

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
