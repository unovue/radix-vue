import { expect, it } from 'vitest'
import * as RekaUI from './index'
import { components, utilities } from '../constant'

it('should expose the correct components', () => {
  const exportedComponents = Object.keys(RekaUI).filter(exp => !exp.includes('inject'))
  expect(exportedComponents).toEqual([...Object.values(components).flat(), ...Object.values(utilities).flat()])
})
