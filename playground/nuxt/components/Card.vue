<template>
  <div class="relative flex min-h-[300px]">
    <div class="h-full card-bg w-full rounded-xl flex relative items-center justify-center resize">
      <div class="w-full max-w-[700px] flex flex-col items-center justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-bg {
  background-image: linear-gradient(330deg, #8e4ec6 0%, #3e63dd 100%);
}
</style>
