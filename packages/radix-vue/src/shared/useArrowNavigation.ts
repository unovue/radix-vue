type ArrowKeyOptions = "horizontal" | "vertical" | "both";

interface ArrowNavigationOptions {
  attributeName?: string;
  arrowKeyOptions?: ArrowKeyOptions; //default to both
  itemsArray?: HTMLElement[];
  loop?: boolean;
}

// recursive function to find the next focusable element to avoid disabled elements
function findNextFocusableElement(
  elements: HTMLElement[],
  currentElement: HTMLElement,
  direction: "next" | "previous",
  loop = true
): HTMLElement | null {
  const index = elements.indexOf(currentElement);
  const newIndex = direction === "next" ? index + 1 : index - 1;

  if (!loop && (newIndex < 0 || newIndex >= elements.length)) return null;

  const adjustedNewIndex = (newIndex + elements.length) % elements.length;
  const candidate = elements[adjustedNewIndex];
  if (!candidate) return null;

  const isDisabled =
    candidate.hasAttribute("disabled") &&
    candidate.getAttribute("disabled") !== "false";
  if (isDisabled) {
    return findNextFocusableElement(elements, candidate, direction, loop);
  }
  return candidate;
}

/**
 * allow arrow navigation for every html element with data-radix-vue-collection-item tag
 * @param e               Keyboard event
 * @param currentElement  Event initiator element or any element that wants to handle the navigation
 * @param parentElement   Parent element where contains all the collection items, this will collect every item to be used when nav
 * @param options         further options
 * @returns               the navigated html element or null if none
 */
export function useArrowNavigation(
  e: KeyboardEvent,
  currentElement: HTMLElement,
  parentElement: HTMLElement | undefined,
  options: ArrowNavigationOptions = {}
): HTMLElement | null {
  const defaultAttributeName = "data-radix-vue-collection-item";
  const attributeName = options?.attributeName ?? defaultAttributeName;
  let allCollectionItems: HTMLElement[] = [];

  if (!parentElement && options.itemsArray && options.itemsArray.length) {
    allCollectionItems = options.itemsArray;
  } else if (parentElement) {
    allCollectionItems = Array.from(
      parentElement.querySelectorAll(`[${attributeName}]`)
    );
  }

  if (allCollectionItems.length) {
    let nextKeys = ["ArrowRight", "ArrowDown"];
    let previousKeys = ["ArrowLeft", "ArrowUp"];

    if (options?.arrowKeyOptions === "horizontal") {
      nextKeys = ["ArrowRight"];
      previousKeys = ["ArrowLeft"];
    } else if (options?.arrowKeyOptions === "vertical") {
      nextKeys = ["ArrowDown"];
      previousKeys = ["ArrowUp"];
    }

    const isNextKey = nextKeys.includes(e.key);
    const isPreviousKey = previousKeys.includes(e.key);

    if (!isNextKey && !isPreviousKey) {
      return null;
    }

    return findNextFocusableElement(
      allCollectionItems,
      currentElement,
      nextKeys.includes(e.key) ? "next" : "previous",
      options.loop
    );
  }

  return null;
}
