import { expect, it } from 'vitest'
import * as Radix from './index'
import { components, utilities } from '../constant'

it('should expose the correct components', () => {
  expect(Object.keys(Radix)).toEqual([...Object.values(components).flat(), ...Object.values(utilities).flat()])
})
