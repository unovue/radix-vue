<script lang="ts">
// Thanks to: https://github.com/chakra-ui/ark/blob/main/packages/vue/src/factory.tsx for better code for Primitives
import {
  defineComponent,
  h,
  getCurrentInstance,
  mergeProps,
  cloneVNode,
} from "vue";
import { renderSlotFragments, isValidVNodeElement } from "@/shared";

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
    inheritAttrs: false,
    props: {
      asChild: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, { attrs, slots }) {
      const instance = getCurrentInstance();

      if (!props.asChild) {
        return () =>
          h(
            node,
            { ...attrs },
            { default: () => slots.default && slots.default() }
          );
      } else {
        return () => {
          let children = slots.default?.();
          children = renderSlotFragments(children || []);

          if (Object.keys(attrs).length > 0) {
            const [firstChild, ...otherChildren] = children;
            if (!isValidVNodeElement(firstChild) || otherChildren.length > 0) {
              const componentName = instance?.parent?.type.name
                ? `<${instance.parent.type.name} />`
                : "component";
              throw new Error(
                [
                  `Detected an invalid children for \`${componentName}\` with \`asChild\` prop.`,
                  "",
                  "Note: All components accepting `asChild` expect only one direct child of valid VNode type.",
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

            // remove props ref from being inferred
            delete firstChild.props?.ref;

            const mergedProps = mergeProps(attrs, firstChild.props ?? {});
            const cloned = cloneVNode(firstChild, mergedProps);
            // Explicitly override props starting with `on`.
            // It seems cloneVNode from Vue doesn't like overriding `onXXX` props. So
            // we have to do it manually.
            for (const prop in mergedProps) {
              if (prop.startsWith("on")) {
                cloned.props ||= {};
                cloned.props[prop] = mergedProps[prop];
              }
            }
            return cloned;
          } else if (Array.isArray(children) && children.length === 1) {
            // No props to inherit
            return children[0];
          } else {
            // No children.
            return null;
          }
        };
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
