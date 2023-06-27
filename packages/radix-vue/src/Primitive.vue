<script lang="ts">
import {
  defineComponent,
  h,
  type DefineComponent,
  type NativeElements,
  type ComponentPropsOptions,
} from "vue";
import { renderSlotFragments, isValidVNodeElement } from "./utils";

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

type PrimitivePropsWithRef<E extends NativeElements> =
  ComponentPropsOptions<E> & {
    asChild?: boolean;
  };

interface PrimitiveForwardRefComponent<E extends NativeElements>
  extends DefineComponent<PrimitivePropsWithRef<E>> {}

type Primitives = {
  [E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E>;
};

const Primitive = NODES.reduce((primitive, node) => {
  const Node = defineComponent({
    setup(props, { slots, attrs }) {
      let children = slots.default?.();
      children = renderSlotFragments(children || []);

      const asChild =
        attrs.asChild === "true" ||
        attrs.asChild === "" ||
        (attrs.asChild as boolean);

      const [firstChild, ...other] = children;
      console.log({ asChild, children, a: slots.default?.()[0], other });

      if (asChild) {
        return () => h(firstChild, slots.default?.()[0]);
      } else {
        return () => h(node, slots.default?.());
      }
    },
  });

  return { ...primitive, [node]: Node };
}, {} as Primitives);

const Root = Primitive;

export { Primitive, Root };
</script>
