import { render, fireEvent, screen } from "@testing-library/vue";
import { describe, test } from "vitest";
import Switch1 from "./Switch1.vue";

describe("test switch functionalities", () => {
  test("thumb can render", async () => {
    render(Switch1);
    screen.getByTestId("thumb");
  });

  test("clicking thumb will toggle value", async () => {
    const { container } = render(Switch1);
    const root = container.querySelector("input")!;
    screen.getByText("unchecked");

    await fireEvent.click(root);
    screen.getByText("checked");

    await fireEvent.click(root);
    screen.getByText("unchecked");
  });

  test("keydown enter root will toggle value", async () => {
    const { container } = render(Switch1);
    container.querySelector("input")!;
    const input = container.querySelector("input")!;
    screen.getByText("unchecked");

    await fireEvent.keyDown(input, { key: "Enter" });
    screen.getByText("checked");

    await fireEvent.keyDown(input, { key: "Enter" });
    screen.getByText("unchecked");
  });
  /*
  test("keydown space root will toggle value", async () => {
    const { container } = render(Switch1);
    const input = container.querySelector("input")!;
    screen.getByText("unchecked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("checked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("unchecked");
  });


  test("root has data state & reactive", async () => {
    const { container } = render(Switch1);
    const root = container.querySelector("input")!;
    const input = container.querySelector("input")!;
    screen.getByText("unchecked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("checked");
    expect(root.dataset.state).toBe("checked");

    await fireEvent.keyDown(input, { keyCode: 32 });
    screen.getByText("unchecked");
    expect(root.dataset.state).toBe("unchecked");
  });

  */
});
