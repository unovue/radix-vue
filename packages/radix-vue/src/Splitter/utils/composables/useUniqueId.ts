import { nanoid } from 'nanoid'

export default function useUniqueId(
  idFromParams: string | null = null,
) {
  return idFromParams ?? nanoid(6)
}
