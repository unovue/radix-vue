<script lang="ts">
import { defineComponent, h, getCurrentInstance } from "vue";
import Slot from "./Slot.vue";
import { renderSlotFragments } from "@/shared";

const NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul",
] as const;

const createComponent = (node: (typeof NODES)[number]) =>
  defineComponent({
    props: {
      asChild: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, { slots }) {
      const asChild = !!props.asChild;
      if (asChild) {
        const children = renderSlotFragments(slots.default?.());

        const instance = getCurrentInstance();
        if (children.length > 1) {
          const componentName = instance?.parent?.type.__name
            ? `<${instance.parent.type.__name} />`
            : "component";
          throw new Error(
            [
              `Detected an invalid children for \`${componentName}\` with \`asChild\` prop.`,
              "",
              `Note: All components accepting \`asChild\` expect only one direct child of valid VNode type.`,
              "You can apply a few solutions:",
              [
                "Provide a single child element so that we can forward the props onto that element.",
                "Ensure the first child is an actual element instead of a raw text node or comment node.",
              ]
                .map((line) => `  - ${line}`)
                .join("\n"),
            ].join("\n")
          );
        }

        const firstChild = children[0];
        if (typeof firstChild.type === "string") {
          return () => h(children[0]);
        } else {
          return () => h(Slot, () => slots.default?.());
        }
      } else {
        return () => h(node, slots.default?.());
      }
    },
  });

type Primitives = {
  [E in (typeof NODES)[number]]: ReturnType<typeof createComponent>;
};

const Primitive = NODES.reduce((primitive, node) => {
  const Node = createComponent(node);

  return { ...primitive, [node]: Node };
}, {} as Primitives);

export default Primitive;
</script>
