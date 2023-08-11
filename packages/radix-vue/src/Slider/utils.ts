/**
 * Clamps a value between a minimum and maximum range.
 *
 * @param {number} value - The value to be clamped.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} The clamped value, constrained within the specified range.
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
