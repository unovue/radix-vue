import { type InjectionKey, inject, provide } from 'vue'

export function createContext<ContextValue>(providerComponentName: string) {
  const injectionKey: InjectionKey<ContextValue | null> = Symbol(
    `${providerComponentName}Context`,
  )

  /**
   * @param fallback The context value to return if the injection fails.
   *
   * @throws When context injection failed and no fallback is specified.
   * This happens when the component injecting the context is not a child of the root component providing the context.
   */
  const injectContext = <T extends ContextValue | null | undefined = ContextValue>(
    fallback?: T,
  ): T extends null ? ContextValue | null : ContextValue => {
    const context = inject(injectionKey, fallback)
    if (context)
      return context

    if (context === null)
      return context as any

    throw new Error(`injection \`${injectionKey.toString()}\` not found. Component must be used within \`${providerComponentName}\``)
  }

  const provideContext = (contextValue: ContextValue) => {
    provide(injectionKey, contextValue)
  }

  return [injectContext, provideContext] as const
}
