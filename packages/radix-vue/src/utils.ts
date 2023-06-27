import {
  Fragment,
  cloneVNode,
  computed,
  isVNode,
  reactive,
  ref,
  type AllowedComponentProps,
  type ComponentCustomProps,
  type Slots,
  type VNode,
  type VNodeProps,
} from "vue";
import type { VueProps } from "./types";

export const callAll =
  <T extends (...a: any[]) => void>(...fns: (T | undefined)[]) =>
    (...a: Parameters<T>) => {
      fns.forEach(function (fn) {
        fn?.(...a);
      });
    };

interface Props {
  [key: string]: any;
}

const clsx = (...args: (string | undefined)[]) =>
  args
    .map((str) => str?.trim())
    .filter(Boolean)
    .join(" ");

type TupleTypes<T extends any[]> = T[number];

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

const eventRegex = /^on[A-Z]/;

export function mergeProps<T extends Props>(
  ...args: T[]
): UnionToIntersection<TupleTypes<T[]>> {
  const result: Props = {};

  for (const props of args) {
    for (const key in result) {
      if (
        eventRegex.test(key) &&
        typeof result[key] === "function" &&
        typeof props[key] === "function"
      ) {
        result[key] = callAll(result[key], props[key]);
        continue;
      }

      if (key === "className" || key === "class") {
        result[key] = clsx(result[key], props[key]);
        continue;
      }

      if (key === "style") {
        result[key] = Object.assign({}, result[key] ?? {}, props[key] ?? {});
        continue;
      }

      result[key] = props[key] !== undefined ? props[key] : result[key];
    }

    // Add props from b that are not in a
    for (const key in props) {
      if (result[key] === undefined) {
        result[key] = props[key];
      }
    }
  }

  return result as any;
}

// https://github.com/chakra-ui/ark/blob/4c7937abd15a5f184b746c20a4b1e68dee197e26/packages/vue/src/utils.ts
/**
 * Checks whether a given VNode is a render-vialble element.
 */
export function isValidVNodeElement(input: any): boolean {
  return (
    input &&
    (typeof input.type === "string" ||
      typeof input.type === "object" ||
      typeof input.type === "function")
  );
}

/**
 * Recursively flattens the Fragment descendants of a given VNode.
 *
 * When you create a component and pass a <slot />, Vue wraps
 * the contents of <slot /> inside a <Fragment /> component and assigns
 * the <slot /> VNode a type of Fragment.
 *
 * So why are we flattening here? Vue renders VNodes from the leaf
 * nodes going up to the root. In other words, when executing the render function
 * of each component, it executes the child render functions first before the parents.
 *
 * This means that at any components render function execution context, all it's children
 * VNodes should have already been rendered -- and that includes any slots! :D
 *
 * In the cases where we pass in a component with slots to the `asChild` component,
 * we shall need to flatten those slot fragment VNodes so as to extract all it's children VNodes
 * to correctly apply the props and event listeners from the with as child components.
 *
 * We do this recursively to ensure that all first child slots that contain fragments in their descendants are rendered into VNodes before passing events.
 * to the first actual element VNode.
 */
export function renderSlotFragments(children: VNode[]): VNode[] {
  return children.flatMap((child) => {
    if (child.type === Fragment) {
      return renderSlotFragments(child.children as VNode[]);
    }
    return [child];
  });
}
