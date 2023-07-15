<script lang="ts">
import type { DropdownMenuProvideValue } from "../../DropdownMenu/DropdownMenuRoot.vue";
import type { DropdownMenuSubProvideValue } from "../../DropdownMenu/DropdownMenuSub.vue";
import type { MenubarProvideValue } from "../../Menubar/MenubarRoot.vue";
import type { MenubarSubProvideValue } from "../../Menubar/MenubarSub.vue";

// TODO: improve types for props
interface BaseMenuItemProps {
  disabled?: boolean;
  rootProvider: DropdownMenuProvideValue | MenubarProvideValue | undefined;
  subProvider?:
    | DropdownMenuSubProvideValue
    | MenubarSubProvideValue
    | undefined;
  orientation?: string | undefined;
  role?: string;
  dataState?: string;
}
</script>

<script setup lang="ts">
import { useArrowNavigation } from "../useArrowNavigation";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { useCollection } from "../useCollection";

const props = withDefaults(defineProps<BaseMenuItemProps>(), {
  role: "menuitem",
});

const emit = defineEmits([
  "handle-click",
  "horizontal-keydown",
  "mouseover",
  "escape-keydown",
]);

const { getItems } = useCollection();
const { primitiveElement, currentElement } = usePrimitiveElement();

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    handleCloseMenu();
    return emit("escape-keydown", e);
  }
  if (e.keyCode === 32 || e.key === "Enter") {
    (e.target as HTMLElement).click();
    return;
  }

  if (e.key === "ArrowLeft") {
    const trigger = props.subProvider?.triggerElement.value;

    if (trigger) {
      props.rootProvider?.changeSelected(trigger);
      return props.subProvider?.hideTooltip();
    }
  }
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    return emit("horizontal-keydown", e);
  }

  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    undefined,
    {
      arrowKeyOptions: "vertical",
      itemsArray: getItems(),
    }
  );
  if (newSelectedElement) {
    props.rootProvider?.changeSelected(newSelectedElement);
  }
}

function handleHover() {
  if (!props.disabled) {
    props.rootProvider?.changeSelected(currentElement.value!);
  }
}

function handleCloseMenu() {
  document.querySelector("body")!.style.pointerEvents = "";
  setTimeout(() => {
    props.rootProvider?.triggerElement.value?.focus();
  }, 0);
}

function handleClick() {
  emit("handle-click");
}

function handleMouseover() {
  emit("mouseover");
}
</script>

<template>
  <PrimitiveDiv
    :role="props.role"
    ref="primitiveElement"
    @keydown.prevent="handleKeydown"
    :data-state="props.dataState"
    data-radix-vue-collection-item
    @mouseenter="handleHover"
    @mouseover="handleMouseover"
    @click="handleClick"
    :data-highlighted="
      rootProvider?.selectedElement.value === currentElement ? '' : null
    "
    :aria-disabled="props.disabled ? true : undefined"
    :data-disabled="props.disabled ? '' : undefined"
    :data-orientation="rootProvider?.orientation"
    :tabindex="
      rootProvider?.selectedElement.value === currentElement ? '0' : '-1'
    "
  >
    <slot />
  </PrimitiveDiv>
</template>
