import { isBrowser } from '@/shared'
import { nanoid } from 'nanoid/non-secure'

/** Temporary function until we have `useId` from Vue */
export default function useUniqueId(
  idFromParams: string | null = null,
) {
  if (!isBrowser && !idFromParams)
    console.warn('Splitter component required `id` for SSR. Or you can wrap the component with `<ClientOnly>`.')

  return idFromParams ?? nanoid(6)
}
