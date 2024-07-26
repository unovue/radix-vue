import { expect, it } from 'vitest'
import * as RekaUI from './index'
import { components, utilities } from '../constant'

it('should expose the correct components', () => {
  expect(Object.keys(RekaUI)).toEqual([...Object.values(components).flat(), ...Object.values(utilities).flat()])
})
