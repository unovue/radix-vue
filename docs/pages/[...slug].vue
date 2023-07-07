<template>
  <DocsPageLayout>
    <ContentRenderer v-if="page?.body" :value="page" class="prose prose-primary dark:prose-invert max-w-none" />
  </DocsPageLayout>
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  colorMode: "dark",
});

const { data: page } = await useAsyncData(`docs-${route.path}`, () => queryContent(route.path).findOne());
const { data: surround } = await useAsyncData(`docs-${route.path}-surround`, () =>
  queryContent()
    .only(["_path", "title", "navigation", "description"])
    .where({ _extension: "md", navigation: { $ne: false } })
    .findSurround(route.path.endsWith("/") ? route.path.slice(0, -1) : route.path)
);

const [prev, next] = surround.value;

useContentHead(page);
</script>
