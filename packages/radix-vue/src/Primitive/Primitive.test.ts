import { mount } from "@vue/test-utils";
import { PrimitiveDiv } from "./";
import { describe, expect, it } from "vitest";

describe("test Primitive functionalities", () => {
  it("should render div element correctly", () => {
    const wrapper = mount(PrimitiveDiv);
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("should renders div element with custom attribute", () => {
    const wrapper = mount(PrimitiveDiv, {
      attrs: {
        type: "button",
      },
    });

    const element = wrapper.find("div");

    expect(element.attributes("type")).toBe("button");
  });

  it("should renders multiple child elements", () => {
    const wrapper = mount(PrimitiveDiv, {
      slots: {
        default: "<div>1</div><div>2</div><div>3</div>",
      },
    });

    const element = wrapper.find("div");
    expect(element.findAll("div").length).toBe(3);
  });

  // ref: https://vitest.dev/api/expect.html#tothrowerror
  describe("asChild", () => {
    it("should throw error when multiple child elements exists", () => {
      const wrapper = () =>
        mount(PrimitiveDiv, {
          props: {
            asChild: true,
          },
          slots: {
            default: "<div>1</div><div>2</div><div>3</div>",
          },
        });

      expect(() => wrapper()).toThrowError(/invalid children/);
    });

    it("should merge child's class together", () => {
      const wrapper = mount(PrimitiveDiv, {
        props: {
          asChild: true,
        },
        attrs: {
          class: "parent-class",
        },
        slots: {
          default:
            '<div class="child-class more-child-class">Child class</div>',
        },
      });

      const element = wrapper.find("div");
      expect(element.attributes("class")).toBe(
        "parent-class child-class more-child-class"
      );
    });

    it("should render the child class element tag", () => {
      const wrapper = mount(PrimitiveDiv, {
        props: {
          asChild: true,
        },

        slots: {
          default: "<a>Child class</a>",
        },
      });

      const element = wrapper.find("a");
      expect(element.exists()).toBeTruthy();
    });

    it("should render the child component", () => {
      const ChildComponent = {
        template: '<div id="child">Hello world</div>',
      };
      const RootComponent = {
        components: { ChildComponent, PrimitiveDiv },
        template: "<PrimitiveDiv><ChildComponent /></PrimitiveDiv>",
      };

      const wrapper = mount(RootComponent, {
        props: {
          asChild: true,
        },
      });

      const element = wrapper.find("div");
      expect(element.html()).toBe('<div id="child">Hello world</div>');
    });

    it("should inherit parent attributes and the child attributes", () => {
      const wrapper = mount(PrimitiveDiv, {
        props: {
          asChild: true,
        },
        attrs: {
          "data-parent-attr": "",
        },
        slots: {
          default: "<div data-child-attr>Child class</div>",
        },
      });

      const element = wrapper.find("div");
      expect(element.attributes("data-parent-attr")).toBe("");
      expect(element.attributes("data-child-attr")).toBe("");
    });

    it("should replace parent attributes with child's attributes", () => {
      const wrapper = mount(PrimitiveDiv, {
        props: {
          asChild: true,
        },
        attrs: {
          id: "parent",
          "data-type": "button",
        },
        slots: {
          default: '<div id="child" data-type="primary">Child class</div>',
        },
      });

      const element = wrapper.find("div");
      expect(element.attributes("data-type")).toBe("primary");
      expect(element.attributes("id")).toBe("child");
    });
  });
});
