<script lang="ts">
export interface MenubarMenuTriggerProps extends PrimitiveProps {
  disabled?: boolean;
  textValue?: string;
}

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { inject, onMounted, computed, nextTick, watchEffect, watch } from "vue";
import {
  MENUBAR_INJECTION_KEY,
  type MenubarProvideValue,
} from "./MenubarRoot.vue";
import {
  MENUBAR_MENU_INJECTION_KEY,
  type MenubarMenuProvideValue,
} from "./MenubarMenu.vue";
import { PopperAnchor } from "@/Popper";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { useArrowNavigation } from "@/shared/useArrowNavigation";
import { useActiveElement } from "@vueuse/core";

const rootInjectedValue = inject<MenubarProvideValue>(MENUBAR_INJECTION_KEY);

const injectedValue = inject<MenubarMenuProvideValue>(
  MENUBAR_MENU_INJECTION_KEY
);

const props = withDefaults(defineProps<MenubarMenuTriggerProps>(), {
  as: "button",
});

const { primitiveElement, currentElement } = usePrimitiveElement();
const activeElement = useActiveElement();

onMounted(() => {
  injectedValue!.triggerElement.value = currentElement.value;
  rootInjectedValue!.triggerItemsArray.push(currentElement.value!);
});

async function openAndSelectFirstElement() {
  rootInjectedValue?.changeValue(injectedValue?.value);

  await nextTick();
  const el = injectedValue?.itemsArray?.[0];
  rootInjectedValue!.selectedElement.value = el;
  el?.focus();
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    return handleCloseMenu();
  }
  if (e.keyCode === 32 || e.key === "Enter") {
    (e.target as HTMLElement).click();
    return;
  }
  if (e.key === "ArrowDown") {
    return openAndSelectFirstElement();
  }

  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    currentElement.value!.parentElement! as HTMLElement,
    {
      arrowKeyOptions: "horizontal",
    }
  );
  if (newSelectedElement) {
    rootInjectedValue?.changeSelected(newSelectedElement);
    newSelectedElement.focus();
    if (rootInjectedValue?.modelValue.value) {
      rootInjectedValue?.changeValue(newSelectedElement.id);
    }
  }
}

function handleHover() {
  if (!props.disabled && rootInjectedValue?.modelValue.value) {
    rootInjectedValue?.changeSelected(currentElement.value!);
    rootInjectedValue?.changeValue(injectedValue?.value);
    return;
  }
}

function handleCloseMenu() {
  rootInjectedValue?.changeValue(undefined);
  document.querySelector("body")!.style.pointerEvents = "";
  setTimeout(() => {
    rootInjectedValue?.triggerElement.value?.focus();
  }, 0);
}

function handleClick() {
  openAndSelectFirstElement();
}

const dataState = computed(() => {
  return injectedValue?.isOpen.value ? "open" : "closed";
});

const highlightedState = computed(() => {
  return (
    (activeElement.value && activeElement.value === currentElement.value) ||
    (rootInjectedValue?.triggerElement.value === currentElement.value &&
      rootInjectedValue?.selectedElement.value)
  );
});

watchEffect(() => {
  if (rootInjectedValue?.selectedElement.value === currentElement.value) {
    rootInjectedValue!.triggerElement.value = currentElement.value;
  }
});

watch(
  activeElement,
  () => {
    if (activeElement.value === currentElement.value) {
      rootInjectedValue!.selectedElement.value = currentElement.value;
      rootInjectedValue!.triggerElement.value = currentElement.value;
    } else if (
      !injectedValue?.isOpen.value &&
      rootInjectedValue!.selectedElement.value === currentElement.value
    ) {
      rootInjectedValue!.selectedElement.value = undefined;
    }
  },
  { immediate: true }
);
</script>

<template>
  <PopperAnchor asChild>
    <Primitive
      role="menuitem"
      ref="primitiveElement"
      :id="injectedValue?.triggerId"
      :aria-expanded="injectedValue?.isOpen.value"
      :aria-controls="injectedValue?.contentId"
      :data-state="dataState"
      :data-orientation="rootInjectedValue?.orientation"
      aria-haspopup="menu"
      @keydown.prevent="handleKeydown"
      data-radix-vue-collection-item
      @mouseenter="handleHover"
      @click="handleClick"
      :data-highlighted="highlightedState ? '' : null"
      :aria-disabled="props.disabled ? true : undefined"
      :data-disabled="props.disabled ? '' : undefined"
      :as-child="props.asChild"
      :as="as"
      :tabindex="
        rootInjectedValue?.triggerElement.value === currentElement ? '0' : '-1'
      "
      v-bind="$attrs"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
