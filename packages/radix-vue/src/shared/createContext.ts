import { type InjectionKey, inject, provide } from 'vue'

export function createContext<ContextValue>(rootComponentName: string) {
  const injectionKey: InjectionKey<ContextValue> = Symbol(
    `${rootComponentName}Context`,
  )

  /**
   * @throws When failed to inject context and fallback not providee.
   * This happens when the component injecting the context is not a child of the root component providing the context.
   */
  const injectContext = <T extends ContextValue | null | undefined = ContextValue>(
    fallback?: T,
  ): T extends null ? ContextValue | null : ContextValue => {
    const context = inject(injectionKey, fallback || undefined)
    if (context)
      return context

    if (fallback === null)
      return null as any

    throw new Error(`Component must be used within ${rootComponentName}`)
  }

  const provideContext = (contextValue: ContextValue) => {
    provide(injectionKey, contextValue)
  }

  return [injectContext, provideContext] as const
}
