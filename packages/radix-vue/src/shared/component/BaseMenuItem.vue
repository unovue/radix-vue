<script lang="ts">
import type { Ref } from "vue";
import type { DropdownMenuProvideValue } from "../../DropdownMenu/DropdownMenuRoot.vue";

interface BaseMenuItemProps {
  disabled?: boolean;
  selectedElementProvider: DropdownMenuProvideValue | undefined;
  orientation: string | undefined;
  role?: string;
  dataState?: Ref<string>;
}
</script>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useArrowNavigation } from "../useArrowNavigation";

const props = withDefaults(defineProps<BaseMenuItemProps>(), {
  role: "menuitem",
});
const emit = defineEmits(["handle-click", "horizontal-keydown"]);

const currentElement = ref<HTMLElement | undefined>();

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    return handleCloseMenu();
  }
  if (e.keyCode === 32 || e.key === "Enter") {
    return handleClick();
  }
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    return emit("horizontal-keydown");
  }
  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    undefined,
    {
      arrowKeyOptions: "vertical",
      itemsArray: props.selectedElementProvider?.itemsArray,
    }
  );
  if (newSelectedElement) {
    props.selectedElementProvider?.changeSelected(newSelectedElement);
  }
}

watchEffect(() => {
  if (
    props.selectedElementProvider.selectedElement.value === currentElement.value
  ) {
    currentElement.value?.focus();
  }
});

function handleHover() {
  if (!props.disabled) {
    props.selectedElementProvider.changeSelected(currentElement.value!);
  }
}

function handleCloseMenu() {
  props.selectedElementProvider.hideTooltip();
  document.querySelector("body")!.style.pointerEvents = "";
  setTimeout(() => {
    props.selectedElementProvider.triggerElement.value?.focus();
  }, 0);
}

function handleClick() {
  emit("handle-click");
}
</script>

<template>
  <div
    :role="props.role"
    ref="currentElement"
    @keydown.prevent="handleKeydown"
    @click.prevent="handleClick"
    :data-state="props.dataState"
    data-radix-vue-collection-item
    @mouseenter="handleHover"
    @mouseleave="selectedElementProvider!.changeSelected(null)"
    :data-highlighted="
      selectedElementProvider?.selectedElement.value === currentElement
        ? ''
        : null
    "
    :aria-disabled="props.disabled ? true : undefined"
    :data-disabled="props.disabled ? '' : undefined"
    :data-orientation="selectedElementProvider?.orientation"
    :tabindex="
      selectedElementProvider?.selectedElement.value === currentElement
        ? '0'
        : '-1'
    "
  >
    <slot />
  </div>
</template>
