<script setup lang="ts">
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "radix-vue";

defineOptions({
  inheritAttrs: false,
});
const slots = useSlots();

const tabs = computed(
  () =>
    slots.default?.().map((slot, index) => {
      return {
        label: slot.props?.filename || slot.props?.label || `${index}`,
        component: slot,
      };
    }) || []
);

const open = ref(false);
const height = computed(() => {
  return open.value ? "100%" : "150px";
});

const codeScrollWrapper = ref<HTMLElement | undefined>();
const buttonRef = ref<HTMLElement | undefined>();
const currentTab = ref("index.vue");

watch(open, () => {
  if (!open.value) {
    nextTick(() => {
      codeScrollWrapper.value.scrollTop = 0;
    });
  }
});
</script>

<template>
  <TabsRoot v-model="currentTab" class="bg-[#1a1a1a] border border-neutral-700/40" @update:model-value="open = true">
    <div class="bg-[#1a1a1a] border-b-2 border-[#272727] flex pr-2 text-sm">
      <div class="flex justify-between items-center w-full">
        <TabsList class="flex">
          <TabsTrigger
            v-for="(tab, index) in tabs"
            :key="index"
            :value="tab.label"
            tabindex="-1"
            class="text-white/70 py-2.5 px-4 border-box data-[state=active]:shadow-[0_1px_0_var(--color-primary-500)] data-[state=active]:font-medium data-[state=active]:text-white"
          >
            {{ tab.label }}
          </TabsTrigger>
        </TabsList>
        <div>
          <select value="TailwindCSS" class="bg-transparent">
            <option value="TailwindCSS">Tailwind CSS</option>
          </select>
        </div>
      </div>
    </div>
    <div
      ref="codeScrollWrapper"
      class="pb-10 block max-h-[80vh]"
      :class="`${open ? 'overflow-scroll' : 'overflow-hidden'}`"
      :style="{ height: height }"
    >
      <TabsContent v-for="tab in tabs" :key="tab.label" :value="tab.label" as-child>
        <div class="relative -mt-5">
          <component :is="tab.component" class="border-0"/>
        </div>
      </TabsContent>
      <div
        class="h-20 left-0 w-full flex items-center justify-center bottom-0 absolute rounded-b-lg bg-gradient-to-t from-neutral-900 to-neutral-900/0"
      >
        <button
          ref="buttonRef"
          class="mt-4 bg-neutral-800/50 hover:bg-neutral-700/30 px-3 py-1 rounded border-neutral-700/50 border"
          @click="open = !open"
        >
          {{ open ? "Collapse code" : "Expand code" }}
        </button>
      </div>
    </div>
  </TabsRoot>
</template>
