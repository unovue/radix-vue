import { beforeEach, describe, expect, test } from "vitest";
import { useArrowNavigation } from "./useArrowNavigation";

describe("useArrowNavigation", () => {
  let currentElement: HTMLElement;
  let parentElement: HTMLElement;
  let childElement1: HTMLElement;
  let childElement2: HTMLElement;

  beforeEach(() => {
    parentElement = document.createElement("div");
    currentElement = document.createElement("div");
    childElement1 = document.createElement("div");
    childElement2 = document.createElement("div");

    currentElement.setAttribute("data-radix-vue-collection-item", "");
    childElement1.setAttribute("data-radix-vue-collection-item", "");
    childElement2.setAttribute("data-radix-vue-collection-item", "");

    parentElement.appendChild(currentElement);
    parentElement.appendChild(childElement1);
    parentElement.appendChild(childElement2);
  });

  test("should navigate horizontally", () => {
    const e = new KeyboardEvent("keydown", { key: "ArrowRight" });
    const nextElement = useArrowNavigation(e, currentElement, parentElement, {
      arrowKeyOptions: "horizontal",
    });
    expect(nextElement).toBe(childElement1);
  });

  test("should navigate vertically", () => {
    const e = new KeyboardEvent("keydown", { key: "ArrowDown" });
    const nextElement = useArrowNavigation(e, currentElement, parentElement, {
      arrowKeyOptions: "vertical",
    });
    expect(nextElement).toBe(childElement1);
  });

  test("should not navigate with arrow keys when arrowKeyOptions is not set to both", () => {
    const nextElementHorizontal = useArrowNavigation(
      new KeyboardEvent("keydown", { key: "ArrowDown" }),
      currentElement,
      parentElement,
      {
        arrowKeyOptions: "horizontal",
      }
    );
    expect(nextElementHorizontal).toBeNull();
    const nextElementVertical = useArrowNavigation(
      new KeyboardEvent("keydown", { key: "ArrowLeft" }),
      currentElement,
      parentElement,
      {
        arrowKeyOptions: "vertical",
      }
    );
    expect(nextElementVertical).toBeNull();
  });

  test("should return null if there are no items in the collection", () => {
    const e = new KeyboardEvent("keydown", { key: "ArrowRight" });
    const nextElement = useArrowNavigation(
      e,
      currentElement,
      document.createElement("div")
    );
    expect(nextElement).toBeNull();
  });

  test("should loop through items if loop is set to true", () => {
    const e = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    const nextElement = useArrowNavigation(e, childElement2, parentElement, {
      loop: true,
    });
    expect(nextElement).toStrictEqual(currentElement);
  });

  test("should not loop through items if loop is set to false", () => {
    const e = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    const nextElement = useArrowNavigation(e, currentElement, parentElement, {
      loop: false,
    });
    expect(nextElement).toBeNull();
  });

  test("should skip disabled items", () => {
    childElement1.setAttribute("disabled", "true");
    childElement2.setAttribute("disabled", "true");
    const e = new KeyboardEvent("keydown", { key: "ArrowRight" });
    const nextElement = useArrowNavigation(e, currentElement, parentElement);
    expect(nextElement).toBeNull();
  });

  test("should navigate correctly in rtl", () => {
    const e = new KeyboardEvent("keydown", { key: "ArrowRight" });
    const nextElement = useArrowNavigation(e, currentElement, parentElement, {
      dir: "rtl",
    });
    expect(nextElement).toBe(childElement2);
  });
});
