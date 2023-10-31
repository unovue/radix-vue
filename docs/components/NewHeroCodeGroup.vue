<script setup lang="ts">
import { type VNode, capitalize, computed, ref, useSlots, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

defineOptions({
  inheritAttrs: false,
})
const slots = useSlots()
const slotsFramework = computed(() => slots.default?.().map(slot => slot.props?.key?.toString()?.replace('_', '')) ?? [])

const cssFramework = useStorage<'css' | 'tailwind' | 'pinceau' >('cssFramework', 'tailwind')
const cssFrameworkOptions = computed(() => [
  { label: 'TailwindCSS', value: 'tailwind' },
  { label: 'CSS', value: 'css' },
  { label: 'Pinceau', value: 'pinceau' },
].filter(i => slotsFramework.value.includes(i.value)))

const tabs = computed(
  () => {
    const currentFramework = slots.default?.().find(slot => slot.props?.key?.toString().includes(cssFramework.value))
    const childSlots = currentFramework?.children as VNode[]
    return childSlots?.map((slot, index) => {
      return {
        label: slot.props?.title || `${index}`,
        component: slot,
      }
    }) || []
  },
)

const open = ref(false)

const codeScrollWrapper = ref<HTMLElement | undefined>()
const buttonRef = ref<HTMLElement | undefined>()
const currentTab = ref('index.vue')

watch(open, () => {
  if (!open.value) {
    codeScrollWrapper.value!.scrollTo({
      top: 0,
    })
  }
})
</script>

<template>
  <TabsRoot
    v-model="currentTab"
    class="bg-[var(--vp-code-block-bg)] border border-neutral-700/40 rounded-b-lg overflow-hidden"
    @update:model-value="open = true"
  >
    <div class="bg-[var(--vp-code-block-bg)] border-b-2 border-[#272727] flex pr-2">
      <div class="flex justify-between items-center w-full text-[13px]">
        <TabsList class="flex">
          <TabsTrigger
            v-for="(tab, index) in tabs"
            :key="index"
            :value="tab.label"
            tabindex="-1"
            class="text-white/70 py-2.5 px-4 border-box data-[state=active]:shadow-[0_1px_0_#10b981] data-[state=active]:font-medium data-[state=active]:text-white"
          >
            {{ tab.label }}
          </TabsTrigger>
        </TabsList>
        <div>
          <select v-model="cssFramework" class="bg-transparent text-white/70 text-right" @change="currentTab = 'index.vue'">
            <option v-for="framework in cssFrameworkOptions" :key="framework.label" :value="framework.value">
              {{ capitalize(framework.label ?? '') }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div
      ref="codeScrollWrapper"
      class="pb-10 block h-full"
      :class="`${open ? 'overflow-scroll max-h-[80vh]' : 'overflow-hidden max-h-[150px]'}`"
    >
      <TabsContent v-for="tab in tabs" :key="tab.label" :value="tab.label" as-child>
        <div class="relative -mt-5 text-base">
          <component :is="tab.component" class="border-0" />
        </div>
      </TabsContent>
      <div
        class="bg-gradient-to-t from-[#161618FF] to-[#16161800] bottom-[1px] left-[1px] right-[1px] h-20 flex items-center justify-center absolute rounded-b-lg"
      >
        <button
          ref="buttonRef"
          class="mt-4 bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded border-neutral-700 border"
          @click="open = !open"
        >
          {{ open ? "Collapse code" : "Expand code" }}
        </button>
      </div>
    </div>
  </TabsRoot>
</template>

<style scoped>
:deep(*) {
  color: white;
}
</style>
