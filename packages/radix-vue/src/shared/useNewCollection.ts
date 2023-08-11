import { unrefElement } from "@vueuse/core";
import {
  inject,
  provide,
  type InjectionKey,
  type Ref,
  ref,
  onBeforeUpdate,
  onMounted,
  onUpdated,
} from "vue";

const ITEM_DATA_ATTR = "data-radix-vue-collection-item";

type ContextValue = Ref<HTMLElement[]>;

export const COLLECTION_SYMBOL = Symbol() as InjectionKey<ContextValue>;

export const useNewCollection = () => {
  const createCollection = (sourceRef?: Ref<HTMLElement | undefined>) => {
    const items = ref<HTMLElement[]>([]);

    function setCollection() {
      const sourceEl = unrefElement(sourceRef);
      if (!sourceEl) return (items.value = []);

      return (items.value = Array.from(
        sourceEl.querySelectorAll(`[${ITEM_DATA_ATTR}]:not([data-disabled])`)
      ) as HTMLElement[]);
    }

    onBeforeUpdate(() => {
      items.value = [];
    });

    onMounted(setCollection);
    onUpdated(setCollection);

    provide(COLLECTION_SYMBOL, items);

    return items;
  };

  const injectCollection = () => {
    return inject(COLLECTION_SYMBOL, ref([]));
  };

  return { createCollection, injectCollection };
};
