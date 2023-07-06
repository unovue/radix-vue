<script setup lang="ts">
import { AvatarRoot, AvatarImage, AvatarFallback } from "radix-vue";
</script>

<template>
  <div class="flex gap-3.5">
    <AvatarRoot class="bg-blackA3 inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarImage
        class="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <AvatarFallback
        class="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        :delayMs="600"
      >
        CT
      </AvatarFallback>
    </AvatarRoot>
    <AvatarRoot class="bg-blackA3 inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarImage
        class="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <AvatarFallback
        class="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        :delayMs="600"
      >
        JD
      </AvatarFallback>
    </AvatarRoot>
    <AvatarRoot class="bg-blackA3 inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarFallback class="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium">
        PD
      </AvatarFallback>
    </AvatarRoot>
  </div>
</template>
