import { render, fireEvent, screen } from "@testing-library/vue";
import { describe, expect, test } from "vitest";
import Switch1 from "./Switch1.vue";

describe("test switch functionalities", () => {
  test("thumb can render", async () => {
    render(Switch1);
    screen.getByTestId("thumb");
  });

  test("clicking thumb will toggle value", async () => {
    render(Switch1);
    const thumb = screen.getByTestId("thumb");
    screen.getByText("unchecked");

    await fireEvent.click(thumb);
    screen.getByText("checked");

    await fireEvent.click(thumb);
    screen.getByText("unchecked");
  });

  test("keydown enter thumb will toggle value", async () => {
    const { container } = render(Switch1);
    screen.getByTestId("thumb");
    const input = container.querySelector("input");
    screen.getByText("unchecked");

    await fireEvent.keyDown(input, { key: "Enter" });
    screen.getByText("checked");

    await fireEvent.keyDown(input, { key: "Enter" });
    screen.getByText("unchecked");
  });

  test("keydown space thumb will toggle value", async () => {
    const { container } = render(Switch1);
    screen.getByTestId("thumb");
    const input = container.querySelector("input");
    screen.getByText("unchecked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("checked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("unchecked");
  });

  test("thumb has data state & reactive", async () => {
    const { container } = render(Switch1);
    const thumb = screen.getByTestId("thumb");
    const input = container.querySelector("input");
    screen.getByText("unchecked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("checked");
    expect(thumb.dataset.state).toBe("checked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("unchecked");
    expect(thumb.dataset.state).toBe("unchecked");
  });
});
