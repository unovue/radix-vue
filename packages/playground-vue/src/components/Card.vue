<template>
  <div class="relative card-bg flex items-center justify-center min-h-[300px] rounded-xl">
    <div class="w-full max-w-[700px] flex flex-col items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card-bg {
  background-image: linear-gradient(330deg, #8E4EC6 0%, #3E63DD 100%);
}
</style>
