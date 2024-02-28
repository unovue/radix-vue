/**
 * The function `areEqual` compares two arrays and returns true if they are equal in length and have
 * the same elements at corresponding indexes.
 * @param {any[]} arrayA - An array of any type of elements.
 * @param {any[]} arrayB - It looks like you haven't provided the value for `arrayB`. Could you please
 * provide the arrayB value so that I can assist you further?
 * @returns The function `areEqual` is returning a boolean value, either `true` if the two input arrays
 * `arrayA` and `arrayB` are equal, or `false` if they are not equal.
 */
export function areEqual(arrayA: any[], arrayB: any[]): boolean {
  if (arrayA.length !== arrayB.length)
    return false

  for (let index = 0; index < arrayA.length; index++) {
    if (arrayA[index] !== arrayB[index])
      return false
  }

  return true
}

/**
 * Splits an array into chunks of a given size.
 * @param arr The array to split.
 * @param size The size of each chunk.
 * @returns An array of arrays, where each sub-array has `size` elements from the original array.
 * @example ```ts
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8];
 * const chunks = chunk(arr, 3);
 * // chunks = [[1, 2, 3], [4, 5, 6], [7, 8]]
 * ```
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const result = []
  for (let i = 0; i < arr.length; i += size)
    result.push(arr.slice(i, i + size))

  return result
}
