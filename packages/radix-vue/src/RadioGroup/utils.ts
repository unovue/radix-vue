import { handleAndDispatchCustomEvent } from '@/shared'

export type SelectEvent = CustomEvent<{ originalEvent: MouseEvent, value?: string }>
export const RADIO_SELECT = 'radio.select'

export function handleSelect(event: MouseEvent, value: string | undefined, callback: (event: SelectEvent) => void) {
  const eventDetail = { originalEvent: event, value }
  handleAndDispatchCustomEvent(RADIO_SELECT, callback, eventDetail)
}
