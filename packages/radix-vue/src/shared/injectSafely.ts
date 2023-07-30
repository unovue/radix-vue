import { inject, type InjectionKey, getCurrentInstance } from "vue";
import { isSSR } from "@/shared/utils";

/**
 * Returns the name of the component which provides the data to
 * be injected by loooking up the parent chain.
 *
 * The name is exposed via defineExpose({ providerName }) in the component
 * setup() function.
 *
 * @param {string} provideComponentName - The name of the component that provides the injection.
 * @param {string} rootComponentName - The root component to break the loop and stop searching for the injection.
 */
function getProviderName(
  provideComponentName: string,
  rootComponentName: string
) {
  const instance = getCurrentInstance();

  if (!instance) {
    throw new Error(
      "[getProviderName] - It must be called in the component's setup() function!"
    );
  }

  let providerName;
  let parent = instance.parent;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (parent === null) {
      break; // Reached the App root
    }

    if (
      parent?.exposed?.providerName === provideComponentName ||
      parent?.exposed?.providerName === rootComponentName
    ) {
      providerName = parent.exposed.providerName;
      break;
    }

    parent = parent.parent;
  }

  return providerName;
}

/**
 * Injects the provided value only if actually provided by an ancestor component.
 * Otherwise returns an empty object.
 *
 *
 * @param {InjectionKey<T>} injectionKey - The key to inject.
 * @param {string} provideComponentName - The name of the component that provides the injection.
 * @param {string} rootComponentName - The root component to break the loop and stop searching for the injection.
 *
 * @returns {T} - Mocked value on the server or if not provided by an ancestor component or the actual value if provided.
 */
export function injectSafely<T>(
  injectionKey: InjectionKey<T>,
  provideComponentName: string,
  rootComponentName: string
) {
  if (isSSR) return {} as T; // Suppress Nuxt SSR warning

  const providerName = getProviderName(provideComponentName, rootComponentName);

  if (providerName === provideComponentName) return inject(injectionKey);

  return {} as T;
}
