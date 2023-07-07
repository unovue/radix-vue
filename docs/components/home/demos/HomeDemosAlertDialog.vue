<script setup lang="ts">
import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogDescription,
} from "radix-vue";

const alertDialogOpen = ref(false);

function handleAction() {
  alert("clicked action button!");
}
</script>

<template>
  <AlertDialogRoot v-model:open="alertDialogOpen">
    <AlertDialogTrigger
      asChild
      class="bg-black/60 text-white hover:black/90 shadow-sm inline-flex h-[35px] items-center justify-center rounded-md px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black transition-all"
    >
      <button>Delete account</button>
    </AlertDialogTrigger>
    <AlertDialogOverlay class="data-[state=open]:animate-overlayShow absolute inset-0 z-20" />
    <AlertDialogContent
      class="z-20 data-[state=open]:animate-contentShow absolute top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[228px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-black/60 p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
    >
      <AlertDialogTitle class="text-white m-0 text-[15px] font-semibold"> Edit Profile? </AlertDialogTitle>
      <AlertDialogDescription class="text-white/60 mt-1 mb-5 text-[11px] leading-normal">
        Make changes to your profile here. Click save when you’re done.
      </AlertDialogDescription>
      <div class="flex justify-end gap-[25px]">
        <AlertDialogAction
          @click="handleAction"
          class="text-white bg-white/10 inline-flex h-[35px] items-center justify-center rounded-md px-2 py-0.5 font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
        >
          Save
        </AlertDialogAction>
      </div>
    </AlertDialogContent>
  </AlertDialogRoot>
</template>
