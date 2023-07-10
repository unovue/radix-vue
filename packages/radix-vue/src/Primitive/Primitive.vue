<script lang="ts">
import {
  defineComponent,
  h,
  getCurrentInstance,
  Fragment,
  type NativeElements,
  type ReservedProps,
  type VNode,
} from "vue";
import Slot from "./Slot.vue";

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

type Primitives = {
  [E in (typeof NODES)[number]]: NativeElements[E] &
    ReservedProps & {
      asChild?: boolean;
    };
};

export function renderSlotFragments(children?: VNode[]): VNode[] {
  if (!children) return [];
  return children.flatMap((child) => {
    if (child.type === Fragment) {
      return renderSlotFragments(child.children as VNode[]);
    }
    return [child];
  });
}

const Primitive = NODES.reduce((primitive, node) => {
  const Node = defineComponent({
    props: {
      asChild: Boolean,
    },
    setup(props, { slots, attrs }) {
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

  return { ...primitive, [node]: Node };
}, {} as Primitives);

export default Primitive;
</script>
