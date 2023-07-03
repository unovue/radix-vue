<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
const slots = useSlots();
const props = defineProps({
  group: String,
})

const selectedIndex = ref(0);

const tabs = computed(
  () =>
    slots.default?.().map((slot, index) => {
      return {
        label: slot.props?.filename || slot.props?.label || `${index}`,
        component: slot,
      };
    }) || []
);

const selectedTab = computed(() =>
  tabs.value.find((_, index) => index === selectedIndex.value)
);

function changeTab(index) {
  selectedIndex.value = index;
}

const open = ref(false);

const height = computed(() => {
  return open.value ? "auto" : "150px";
});

const codeScrollWrapper = ref<HTMLElement | undefined>();

watch([open, selectedTab], () => {
  if (!open.value && codeScrollWrapper.value) {
    codeScrollWrapper.value.scrollTop = 0;
  }
});
</script>

<template>
  <div :selected-index="selectedIndex" class="bg-neutral-900" @change="changeTab">
    <div class="bg-neutral-900 border-b border-neutral-800 flex pr-2 text-sm">
      <div class="flex justify-between items-center w-full">
        <div class="flex">
          <button v-for="(tab, index) in tabs" :key="index" tabindex="-1" :class="[
            selectedIndex === index ? 'shadow-[0_1px_0_#FFF] font-medium' : 'opacity-60',
          ]" class="py-2.5 px-4 border-box" @click="selectedIndex = index">
            {{ tab.label }}
          </button>
        </div>
        <div>
        {{ props.group }}
          <select value="TailwindCSS" class="bg-transparent">
            <option value="TailwindCSS">Tailwind CSS</option>
          </select>
        </div>
      </div>
    </div>
    <div
      ref="codeScrollWrapper"
        class="bg-neutral-900 pb-10 block max-h-[80vh]"
        :class="`${open ? 'overflow-scroll' : 'overflow-hidden'}`"
        :style="{ height: height }"
      >
        <div class="relative">
        <component :is="selectedTab.component" />
        </div>
        <div
          class="h-20 left-0 w-full flex items-center justify-center bottom-0 absolute rounded-b-lg bg-gradient-to-t from-neutral-900 to-neutral-900/0"
        >
          <button
            class="mt-4 bg-neutral-900 hover:bg-neutral-800 px-3 py-1 rounded border-neutral-700/50 border"
            @click="open = !open"
          >
            {{ open ? "Collapse code" : "Expand code" }}
          </button>
        </div>
      </div>
  </div>
</template>
