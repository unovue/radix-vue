<script setup lang="ts">
import { EditableArea, EditableCancelTrigger, EditableEditTrigger, EditableInput, EditablePreview, EditableRoot, EditableSubmitTrigger } from 'radix-vue'
</script>

<template>
  <div class="w-[250px]">
    <EditableRoot
      v-slot="{ isEditing }"
      default-value="Click to edit 'Radix Vue'"
      placeholder="Enter text..."
      class="flex flex-col gap-4"
      auto-resize
    >
      <EditableArea class="text-white w-[250px]">
        <EditablePreview />
        <EditableInput class="w-full placeholder:text-white" />
      </EditableArea>
      <EditableEditTrigger
        v-if="!isEditing"
        class="w-max inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-green11 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
      />
      <div
        v-else
        class="flex gap-4"
      >
        <EditableSubmitTrigger
          class="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-green11 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        />
        <EditableCancelTrigger
          class="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-red9 text-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-red10 focus:shadow-[0_0_0_2px] focus:shadow-black"
        />
      </div>
    </EditableRoot>
  </div>
</template>
