<template>
  <div class="relative rounded-lg overflow-hidden text-sm text-black">
    <div class="bg-gradient-to-br from-teal9 to-green9 w-full relative items-center justify-center flex">
      <div class="w-full max-w-[700px] flex flex-col items-center justify-center py-[100px]">
        <slot />
      </div>
    </div>
    <slot name="codeSlot" />
  </div>
</template>

<style scoped>
:deep(input) {
  background-color: white;
}

:deep(button:focus), :deep(button:focus-visible) {
  outline: 0;
}

:deep(h3) {
  margin: 0px !important;
  font-weight: unset !important;
}
</style>
