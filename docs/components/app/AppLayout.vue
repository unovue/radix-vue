<script setup lang="ts">
const { config } = useDocus()

useHead({
  titleTemplate: config.value.titleTemplate,
  meta: [
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

watch(
  () => config.value.titleTemplate,
  () => useHead({ titleTemplate: config.value.titleTemplate })
)

useContentHead(config.value as any)
</script>

<template>
  <div class="app-layout">
    <AppLoadingBar />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.app-layout': {
    main: {
      minHeight: 'calc(100vh - {docus.header.height} - {docus.footer.height})',
    }
  }
})
</style>