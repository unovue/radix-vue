<template>
  <div class="relative text-[15px] text-black">
    <div class="bg-gradient-to-br rounded-t-lg from-teal9 to-green9 w-full relative items-center justify-center flex">
      <div class="w-full max-w-[700px] flex flex-col items-center justify-center py-[100px]">
        <slot />
    </DemoContainer>
    <slot name="codeSlot" />
</template>

<style scoped>
:deep(input) {
  background-color: white;
}

:deep(li) {
  margin-top: 0 !important;
}

:deep(button:focus), :deep(button:focus-visible) {
  outline: 0;
}

:deep(h3) {
  margin: 0px !important;
  font-weight: unset !important;
}

:deep(pre) {
  z-index: 0 !important;
}
</style>
