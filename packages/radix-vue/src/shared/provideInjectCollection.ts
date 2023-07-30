import { unrefElement } from "@vueuse/core";

import {
  inject,
  provide,
  ref,
  // onBeforeUpdate,
  onMounted,
  // onUpdated,
  getCurrentInstance,
  type Ref,
} from "vue";
import { isSSR } from "./utils";

const ITEM_DATA_ATTR = "data-radix-vue-collection-item";

// We cannot use a symbol as the injection is computed dynamically
const COLLECTION_INJECTION_KEY_PREFIX = "radix-vue-collection-provide-";

/**
 * Creates an unique key with the correspondent component id that is providing the collection
 */
function getProvideCollectionKey() {
  const instance = getCurrentInstance();
  if (!instance) return Symbol();

  return `${COLLECTION_INJECTION_KEY_PREFIX}${instance.uid}`;
}

/**
 * Retrieves, updates and provides the collection of items that can be navigated
 * by BaseMenuItem.
 *
 * @param {Ref<HTMLElement | undefined>} sourceRef - The ref of the element that contains the items.
 *
 * @returns {Ref<HTMLElement[]>} - The collection of items.
 */
export function provideCollection(sourceRef: Ref<HTMLElement | undefined>) {
  const items = ref<HTMLElement[]>([]);

  function setCollection() {
    const sourceEl = unrefElement(sourceRef);
    if (!sourceEl) return (items.value = []);

    return (items.value = Array.from(
      sourceEl.querySelectorAll(`[${ITEM_DATA_ATTR}]:not([data-disabled])`)
    ) as HTMLElement[]);
  }

  // Either use onMounted or onMounted+onBeforeUpdate, the second one hurts a bit performance, feel free to choose

  /*   onBeforeUpdate(() => {
    items.value = [];
  }); */

  onMounted(setCollection);
  // onUpdated(setCollection);

  provide(getProvideCollectionKey(), items);

  return items;
}

/**
 * Injects the nearest collection which has been provided
 * by a component using `provideCollection` and defineExpose({ providesCollection: true }})
 *
 * The key to inject is computed dynamically based on the parent component id.
 *
 * If no collection is injected by a parent returns an empty ref array to prevent errors.
 *
 * @returns {Ref<HTMLElement[]>} - The collection of items or an empty ref array if SSR or no collection is provided.
 */
export function injectCollection(): Ref<HTMLElement[]> {
  if (isSSR) return ref([]);

  const instance = getCurrentInstance();
  if (!instance) return ref([]);

  let shouldInject = false;

  let parent = instance.parent;
  let parentId = instance.parent?.uid;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (parent === null) break; // Reaches App root

    if (parent?.exposed?.providesCollection === true) {
      shouldInject = true;
      parentId = parent.uid;

      break;
    }

    parent = parent.parent;
  }

  if (shouldInject) {
    return inject(`${COLLECTION_INJECTION_KEY_PREFIX}${parentId}`) as Ref<
      HTMLElement[]
    >;
  }

  return ref([]);
}
