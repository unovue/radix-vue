<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'
</script>

<template>
  <div class="flex gap-5">
    <AvatarRoot class="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarImage
        class="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <AvatarFallback
        class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        :delay-ms="600"
      >
        CT
      </AvatarFallback>
    </AvatarRoot>
    <AvatarRoot class="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarImage
        class="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <AvatarFallback
        class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        :delay-ms="600"
      >
        JD
      </AvatarFallback>
    </AvatarRoot>
    <AvatarRoot class="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarFallback class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium">
        PD
      </AvatarFallback>
    </AvatarRoot>
  </div>
</template>
