import { type HourCycle, useKbd } from '@/shared'
import type { CycleTimeOptions, DateFields, DateValue, TimeFields } from '@internationalized/date'
import type { Ref } from 'vue'

export type UseDateFieldProps = {
  hasLeftFocus: Ref<boolean>
  lastKeyZero: Ref<boolean>
}

export function useDateField(props: UseDateFieldProps) {
  const kbd = useKbd()

  function deleteValue(prevValue: number | null) {
    props.hasLeftFocus.value = false
    if (!prevValue)
      return prevValue

    const str = prevValue.toString()
    if (str.length === 1)
      return null

    return Number.parseInt(str.slice(0, -1))
  }
  function dateTimeValueIncrementation(e: KeyboardEvent, part: keyof Omit<DateFields, 'era'> | keyof TimeFields, dateRef: DateValue, prevValue: number | null, hourCycle?: HourCycle): number {
    const sign = e.key === kbd.ARROW_UP ? 1 : -1

    if (prevValue === null)
      return dateRef[part as keyof Omit<DateFields, 'era'>]

    if (part === 'hour' && 'hour' in dateRef) {
      const cycleArgs: [keyof DateFields | keyof TimeFields, number, CycleTimeOptions?] = [part, sign, { hourCycle }]
      return dateRef.set({ [part as keyof DateValue]: prevValue }).cycle(...cycleArgs)[part]
    }

    const cycleArgs: [keyof DateFields, number] = [part as keyof DateFields, sign]
    return dateRef.set({ [part as keyof DateValue]: prevValue }).cycle(...cycleArgs)[part as keyof Omit<DateFields, 'era'>]
  }
  function updateDayOrMonth(max: number, num: number, prev: number | null) {
    let moveToNext = false
    const maxStart = Math.floor(max / 10)

    /**
     * If the user has left the segment, we want to reset the
     * `prev` value so that we can start the segment over again
     * when the user types a number.
   */
    // probably not implement, kind of weird
    if (props.hasLeftFocus.value) {
      props.hasLeftFocus.value = false
      prev = null
    }

    if (prev === null) {
    /**
       * If the user types a 0 as the first number, we want
       * to keep track of that so that when they type the next
       * number, we can move to the next segment.
     */

      if (num === 0) {
        props.lastKeyZero.value = true
        return { value: null, moveToNext }
      }
      /**
       * If the last key was a 0, or if the first number is
       * greater than the max start digit (0-3 in most cases), then
       * we want to move to the next segment, since it's not possible
       * to continue typing a valid number in this segment.
     */

      if (props.lastKeyZero.value || num > maxStart) {
      // move to next
        moveToNext = true
      }
      props.lastKeyZero.value = false
      /**
       * If none of the above conditions are met, then we can just
       * return the number as the segment value and continue typing
       * in this segment.
     */
      return { value: num, moveToNext }
    }

    /**
     * If the number of digits is 2, or if the total with the existing digit
     * and the pressed digit is greater than the maximum value for this
     * month, then we will reset the segment as if the user had pressed the
     * backspace key and then typed the number.
   */
    const digits = prev.toString().length
    const total = Number.parseInt(prev.toString() + num.toString())
    /**
       * If the number of digits is 2, or if the total with the existing digit
       * and the pressed digit is greater than the maximum value for this
       * month, then we will reset the segment as if the user had pressed the
       * backspace key and then typed the number.
   */

    if (digits === 2 || total > max) {
    /**
      * As we're doing elsewhere, we're checking if the number is greater
      * than the max start digit (0-3 in most months), and if so, we're
       * going to move to the next segment.
     */
      if (num > maxStart || total > max) {
      // move to next
        moveToNext = true
      }
      return { value: num, moveToNext }
    }
    // move to next
    moveToNext = true
    return { value: total, moveToNext }
  }

  function updateMinuteOrSecond(num: number, prev: number | null) {
    const max = 59
    let moveToNext = false
    const maxStart = Math.floor(max / 10)

    /**
     * If the user has left the segment, we want to reset the
     * `prev` value so that we can start the segment over again
     * when the user types a number.
   */
    // probably not implement, kind of weird
    if (props.hasLeftFocus.value) {
      props.hasLeftFocus.value = false
      prev = null
    }

    if (prev === null) {
    /**
       * If the user types a 0 as the first number, we want
       * to keep track of that so that when they type the next
       * number, we can move to the next segment.
     */

      if (num === 0) {
        props.lastKeyZero.value = true
        return { value: 0, moveToNext }
      }
      /**
       * If the last key was a 0, or if the first number is
       * greater than the max start digit (0-3 in most cases), then
       * we want to move to the next segment, since it's not possible
       * to continue typing a valid number in this segment.
     */

      if (props.lastKeyZero.value || num > maxStart) {
      // move to next
        moveToNext = true
      }
      props.lastKeyZero.value = false
      /**
       * If none of the above conditions are met, then we can just
       * return the number as the segment value and continue typing
       * in this segment.
     */
      return { value: num, moveToNext }
    }

    /**
     * If the number of digits is 2, or if the total with the existing digit
     * and the pressed digit is greater than the maximum value for this
     * month, then we will reset the segment as if the user had pressed the
     * backspace key and then typed the number.
   */
    const digits = prev.toString().length
    const total = Number.parseInt(prev.toString() + num.toString())

    /**
       * If the number of digits is 2, or if the total with the existing digit
       * and the pressed digit is greater than the maximum value for this
       * month, then we will reset the segment as if the user had pressed the
       * backspace key and then typed the number.
   */

    if (digits === 2 || total > max) {
    /**
      * As we're doing elsewhere, we're checking if the number is greater
      * than the max start digit (0-3 in most months), and if so, we're
       * going to move to the next segment.
     */
      if (num > maxStart) {
      // move to next
        moveToNext = true
      }
      return { value: num, moveToNext }
    }
    // move to next
    moveToNext = true
    return { value: total, moveToNext }
  }

  function updateHour(num: number, prev: number | null) {
    const max = 24
    let moveToNext = false
    const maxStart = Math.floor(max / 10)

    /**
     * If the user has left the segment, we want to reset the
     * `prev` value so that we can start the segment over again
     * when the user types a number.
   */
    // probably not implement, kind of weird
    if (props.hasLeftFocus.value) {
      props.hasLeftFocus.value = false
      prev = null
    }

    if (prev === null) {
    /**
       * If the user types a 0 as the first number, we want
       * to keep track of that so that when they type the next
       * number, we can move to the next segment.
     */

      if (num === 0) {
        props.lastKeyZero.value = true
        return { value: null, moveToNext }
      }
      /**
       * If the last key was a 0, or if the first number is
       * greater than the max start digit (0-3 in most cases), then
       * we want to move to the next segment, since it's not possible
       * to continue typing a valid number in this segment.
     */

      if (props.lastKeyZero.value || num > maxStart) {
      // move to next
        moveToNext = true
      }
      props.lastKeyZero.value = false
      /**
       * If none of the above conditions are met, then we can just
       * return the number as the segment value and continue typing
       * in this segment.
     */
      return { value: num, moveToNext }
    }

    /**
     * If the number of digits is 2, or if the total with the existing digit
     * and the pressed digit is greater than the maximum value for this
     * month, then we will reset the segment as if the user had pressed the
     * backspace key and then typed the number.
   */
    const digits = prev.toString().length
    const total = Number.parseInt(prev.toString() + num.toString())

    /**
       * If the number of digits is 2, or if the total with the existing digit
       * and the pressed digit is greater than the maximum value for this
       * month, then we will reset the segment as if the user had pressed the
       * backspace key and then typed the number.
   */

    if (digits === 2 || total > max) {
    /**
      * As we're doing elsewhere, we're checking if the number is greater
      * than the max start digit (0-3 in most months), and if so, we're
       * going to move to the next segment.
     */
      if (num > maxStart) {
      // move to next
        moveToNext = true
      }
      return { value: num, moveToNext }
    }
    // move to next
    moveToNext = true
    return { value: total, moveToNext }
  }

  function updateYear(num: number, prev: number | null) {
    let moveToNext = false

    /**
     * If the user has left the segment, we want to reset the
     * `prev` value so that we can start the segment over again
     * when the user types a number.
   */
    // probably not implement, kind of weird
    if (props.hasLeftFocus.value) {
      props.hasLeftFocus.value = false
      prev = null
    }

    if (prev === null)
      return { value: num === 0 ? 1 : num, moveToNext }

    const str = prev.toString() + num.toString()

    if (str.length > 4)
      return { value: num === 0 ? 1 : num, moveToNext }

    if (str.length === 4)
      moveToNext = true

    const int = Number.parseInt(str)
    return { value: int, moveToNext }
  }

  return {
    updateDayOrMonth,
    updateYear,
    updateHour,
    updateMinuteOrSecond,
    dateTimeValueIncrementation,
    deleteValue,
  }
}
