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
    <a v-if="title"
        class="capitalize md:text-lg font-semibold mb-2 ml-2 inline-flex items-center group"
        :href="`/components/${title?.replace(' ', '-')}.html`"
        >{{ title }}

        <Icon icon="ic-round-arrow-forward" class="ml-2 group-focus:ml-3 group-hover:ml-3 transition-[margin]"></Icon>
    </a>
    <div ref="demo"
        class="bg-gradient-to-br rounded-t-lg from-teal9 to-green9 relative grid place-items-center py-10 md:py-24 min-h-[256px] lg:h-[400px] overflow-x-auto"
        :class="{'px-5': needsPadding}"
    >
        <slot />
    </div>
</template>
