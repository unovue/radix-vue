<script setup lang="ts">
// import { useCollection } from "$lib/internal/helpers/collectionContext";

// import type { BaseProps } from "$lib/internal/types";
import { CollapsibleTrigger } from "../Collapsible";
// import { getItemContext } from "./item.svelte";
// import { getRootCtx, getTriggerCollection } from "./root.svelte";

// type $$Props = AccordionTriggerProps;
import {
  ACCORDION_INJECTION_KEY,
  type AccordionProvideValue,
} from "./AccordionRoot.vue";
import {
  ACCORDION_ITEM_INJECTION_KEY,
  type AccordionItemProvideValue,
} from "./AccordionItem.vue";
import { inject } from "vue";

const rootInjectedValue = inject<AccordionProvideValue>(
  ACCORDION_INJECTION_KEY
);
const itemInjectedValue = inject<AccordionItemProvideValue>(
  ACCORDION_ITEM_INJECTION_KEY
);

// const itemCtx = getItemContext();
// const rootCtx = getRootCtx();
// const triggerCollection = getTriggerCollection();
// let triggerIndex = 0;

const handleKeyDown = (e: KeyboardEvent) => {
  // const allToggleItem = Array.from(
  // injectedValue!.parentElement!.value!.querySelectorAll(
  //   "[data-radix-vue-collection-item]"
  // )
  // );

  switch (e.key) {
    case "ArrowDown": {
      e.preventDefault();
      e.stopPropagation();
      //   $triggerCollection[triggerIndex + 1]?.focus();
      break;
    }
    case "ArrowUp": {
      e.preventDefault();
      e.stopPropagation();
      //   $triggerCollection[triggerIndex - 1]?.focus();
      break;
    }
    case "Home": {
      e.preventDefault();
      e.stopPropagation();
      //   $triggerCollection[0]?.focus();
      break;
    }
    case "End": {
      e.preventDefault();
      e.stopPropagation();
      //   $triggerCollection.at(-1)?.focus();
      break;
    }
  }
};

// function onIndexChange(index: number) {
//   triggerIndex = index;
// }

function handleChange(e: any) {
  const value = e.detail;
  if (rootInjectedValue?.type.value === "single") {
    rootInjectedValue?.changeModelValue(
      value ? (itemInjectedValue?.value.value as string) : null
    );
    //   rootInjectedValue?.value.value = value ? itemInjectedValue?.value.value : null;
  } else {
    const prevValue = Array.isArray(rootInjectedValue?.modelValue.value)
      ? (rootInjectedValue?.modelValue.value as string[])
      : [];
    rootInjectedValue?.changeModelValue(
      value
        ? [...prevValue, itemInjectedValue?.value.value as string]
        : prevValue.filter(
            (v) => v !== (itemInjectedValue?.value.value as string)
          )
    );
    //   rootInjectedValue?.value.value = value
    //     ? [...prevValue, itemInjectedValue?.value.value]
    //     : prevValue.filter((v) => v !== itemInjectedValue?.value.value);
  }
}
</script>

<template>
  <CollapsibleTrigger @change="handleChange" @keydown="handleKeyDown">
    <slot />
  </CollapsibleTrigger>
</template>
