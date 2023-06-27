/**
 * check if mouse in element
 * @param e
 * @param element
 * @returns
 */
export function useMouseInElement(
  e: MouseEvent,
  element: HTMLElement
): boolean {
  const { left, top, right, bottom } = element.getBoundingClientRect();
  const { clientX, clientY } = e;
  if (
    clientX >= left &&
    clientX <= right &&
    clientY >= top &&
    clientY <= bottom
  ) {
    return true;
  } else {
    return false;
  }
}
