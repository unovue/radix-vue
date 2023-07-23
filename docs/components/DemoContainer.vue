<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Icon } from "@iconify/vue";

defineProps<{
  title?: string;
}>();

const demo = ref<HTMLDivElement>(null);
const needsPadding = ref<Boolean>('false');

onMounted(() => {
  const demoElement = demo.value.firstElementChild as HTMLElement;
  needsPadding.value = demo.value.clientWidth <= demoElement.clientWidth;
});
</script>

<template>
  <div>
    <a
      class="capitalize text-lg font-semibold mb-2 ml-2 inline-flex items-center group"
      :href="`/components/${title?.replace(' ', '-')}.html`"
      >{{ title }}

        <Icon icon="ic-round-arrow-forward" class="ml-2 group-focus:ml-3 group-hover:ml-3 transition-[margin]"></Icon>
    </a>
    <div
      class="custom-justify-center p-4 md:p-10 min-h-[256px] lg:h-[400px] bg-gradient-to-br rounded-xl from-teal9 to-green9 w-full relative items-center flex overflow-x-auto"
    >
        <slot />
    </div>
</template>
