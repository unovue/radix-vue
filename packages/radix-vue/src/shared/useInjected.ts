import { inject, type InjectionKey } from "vue";

export function useInjected<T>(key: InjectionKey<T>): NonNullable<T> {
  const injectedValue = inject(key);

  if (!injectedValue) {
    throw new Error(
      `Injected value not found. Make sure component are wrapped correctly.`
    );
  }

  return injectedValue;
}
