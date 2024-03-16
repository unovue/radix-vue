export type AcceptableValue = string | number | boolean | Record<string, any>
export type ArrayOrWrapped<T> = T extends any[] ? T : Array<T>
