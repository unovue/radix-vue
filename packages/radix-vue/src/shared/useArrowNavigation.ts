// allow arrow navigation for every html element with data-radix-vue-collection-item tag

type ArrowKeyOptions = "horizontal" | "vertical" | "both";

interface ArrowNavigationOptions {
  attributeName?: string;
  arrowKeyOptions?: ArrowKeyOptions; //default to both
}

export function useArrowNavigation(
  e: KeyboardEvent,
  currentElement: HTMLElement,
  parentElement: HTMLElement,
  options?: ArrowNavigationOptions
): HTMLElement | null {
  const defaultAttributeName = "data-radix-vue-collection-item";
  const attributeName = options?.attributeName ?? defaultAttributeName;

  const allCollectionItems = Array.from(
    parentElement.querySelectorAll(`[${attributeName}]`)
  ) as HTMLElement[];

  if (allCollectionItems.length) {
    const currentTabIndex = allCollectionItems.indexOf(currentElement!);

    let newFocusedElement: HTMLElement | null = null;

    let nextKeys = ["ArrowRight", "ArrowDown"];
    let previousKeys = ["ArrowLeft", "ArrowUp"];

    if (options?.arrowKeyOptions === "horizontal") {
      nextKeys = ["ArrowRight"];
      previousKeys = ["ArrowLeft"];
    } else if (options?.arrowKeyOptions === "vertical") {
      nextKeys = ["ArrowDown"];
      previousKeys = ["ArrowUp"];
    }

    if (nextKeys.includes(e.key)) {
      e.preventDefault();
      if (allCollectionItems[currentTabIndex + 1]) {
        newFocusedElement = allCollectionItems[currentTabIndex + 1];
      } else {
        newFocusedElement = allCollectionItems[0];
      }
    }

    if (previousKeys.includes(e.key)) {
      e.preventDefault();
      if (allCollectionItems[currentTabIndex - 1]) {
        newFocusedElement = allCollectionItems[currentTabIndex - 1];
      } else {
        newFocusedElement = allCollectionItems[allCollectionItems.length - 1];
      }
    }

    newFocusedElement?.focus();
    return newFocusedElement;
  }

  return null;
}
