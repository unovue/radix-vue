<template>
  <div class="xl:-mx-10 relative rounded-lg overflow-hidden text-sm">
    <div class="bg-gradient-to-br from-teal-500 to-green-600 w-full relative items-center justify-center flex">
      <div class="w-full max-w-[700px] flex flex-col items-center justify-center py-[100px]">
        <slot name="previewSlot" />
      </div>
    </div>
    <slot name="codeSlot" />
  </div>
</template>

<style>
input {
  background-color: white;
}
</style>
