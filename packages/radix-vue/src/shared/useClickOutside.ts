export function useClickOutside(e: MouseEvent, element: HTMLElement) {
  if (element) {
    const elementRect = element.getBoundingClientRect();

    if (
      e.clientX > elementRect.left &&
      e.clientX < elementRect.right &&
      e.clientY > elementRect.top &&
      e.clientY < elementRect.bottom
    ) {
      return false;
    } else {
      return true;
    }
  }
}
