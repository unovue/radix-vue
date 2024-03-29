import type { Granularity } from './comparators'
import type { HourCycle } from './types'

export function getOptsByGranularity(granularity: Granularity, hourCycle: HourCycle) {
  const opts: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    hourCycle: hourCycle === 24 ? 'h24' : undefined,
    hour12: hourCycle === 24 ? false : undefined,
  }

  if (granularity === 'day') {
    delete opts.second
    delete opts.hour
    delete opts.minute
    delete opts.timeZoneName
  }
  if (granularity === 'hour') {
    delete opts.minute
    delete opts.second
  }

  if (granularity === 'minute')
    delete opts.second

  return opts
}

export function handleCalendarInitialFocus(calendar: HTMLElement) {
  const selectedDay = calendar.querySelector<HTMLElement>('[data-selected]')
  if (selectedDay)
    return selectedDay.focus()

  const today = calendar.querySelector<HTMLElement>('[data-today]')
  if (today)
    return today.focus()

  const firstDay = calendar.querySelector<HTMLElement>('[data-radix-vue-calendar-day]')
  if (firstDay)
    return firstDay.focus()
}
