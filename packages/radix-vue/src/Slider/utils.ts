/**
 * Clamps a value within a specified range.
 *
 * @param {number} value - The value to be clamped.
 * @param {[number, number]} range - An array containing the minimum and maximum values of the range.
 * @returns {number} The clamped value within the specified range.
 */
export function clamp(value: number, [min, max]: [number, number]): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Converts a numeric value to a percentage within a given range.
 *
 * @param {number} value - The value to be converted to a percentage.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} The converted value as a percentage between 0 and 100.
 */
export function convertValueToPercentage(
  value: number,
  min: number,
  max: number
) {
  const maxSteps = max - min;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min);
  return clamp(percentage, [0, 100]);
}
