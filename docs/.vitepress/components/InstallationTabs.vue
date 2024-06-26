<script setup lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { PACKAGE_MANAGERS } from '../plugins/InstallationTabs'
import { store } from '../store'
</script>

<template>
  <TabsRoot
    v-model="store.packageManager"
    class="bg-[var(--vp-code-block-bg)] border border-neutral-700/40 rounded-lg overflow-hidden"
  >
    <div class="bg-[var(--vp-code-block-bg)] border-b-2 border-[#272727] flex pr-2">
      <div class="flex justify-between items-center w-full text-[13px]">
        <TabsList class="flex">
          <TabsTrigger
            v-for="(pkg, index) in PACKAGE_MANAGERS"
            :key="index"
            :value="pkg"
            tabindex="-1"
            class="text-white/70 py-2.5 px-4 border-box data-[state=active]:shadow-[0_1px_0_#10b981] data-[state=active]:font-medium data-[state=active]:text-white"
          >
            {{ pkg }}
          </TabsTrigger>
        </TabsList>
      </div>
    </div>

    <div
      class="[&_>div]:!m-0 custom"
    >
      <TabsContent
        v-for="pkg in PACKAGE_MANAGERS"
        :key="pkg"
        :value="pkg"
        as-child
      >
        <slot :name="pkg" />
      </TabsContent>
    </div>
  </TabsRoot>
</template>
