import { inject, type InjectionKey, getCurrentInstance } from "vue";
import { isSSR } from "@/shared/utils";

/**
 * Returns the name of the component which provides the data to
 * be injected by loooking up the parent chain.
 *
 * The key is exposed via defineExpose({ providerKey }) in the component
 * setup() function.
 *
 * @param {InjectionKey<T>} providerKey - The key that provides the injection.
 *
 * @returns {InjectionKey<T> | undefined} - The key of the component which provides the injection or undefined if no key is found.
 */
function getProviderKey<T>(
  providerKey: InjectionKey<T>
): InjectionKey<T> | undefined {
  const instance = getCurrentInstance();

  if (!instance) {
    throw new Error(
      "[getProviderName] - It must be called in the component's setup() function!"
    );
  }

  let providerKey_: InjectionKey<T> | undefined = undefined;
  let parent = instance.parent;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (parent === null) {
      break; // Reached the App root
    }

    if (
      parent?.exposed?.providerKey === providerKey ||
      parent?.exposed?.isComponentRoot
    ) {
      providerKey_ = parent.exposed.providerKey;
      break;
    }

    parent = parent.parent;
  }

  return providerKey_;
}

/**
 * Injects the provided value only if actually provided by an ancestor component.
 * Otherwise returns an empty object.
 *
 * @param {InjectionKey<T>} injectionKey - The key to inject.
 *
 * @returns {T} - Mocked value on the server or if not provided by an ancestor component or the actual value if provided.
 */
export function injectSafely<T>(injectionKey: InjectionKey<T>) {
  if (isSSR) return {} as T; // Suppress Nuxt SSR warning

  const providerKey = getProviderKey(injectionKey);

  if (providerKey === injectionKey) return inject(injectionKey);

  return {} as T;
}
