import type { InjectionKey } from "vue";

import { injectSafely as _injectSafely } from "@/shared/injectSafely";
import { Components } from "./constants";

/**
 * This is just an alias for the original injectSafely function
 * which avoids to have to pass always the root component name.
 */
export function injectSafely<T>(
  injectionKey: InjectionKey<T>,
  provideComponentName: string
) {
  return _injectSafely<T>(injectionKey, provideComponentName, Components.ROOT);
}
