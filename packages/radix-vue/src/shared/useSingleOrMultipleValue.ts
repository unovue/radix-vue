import { useVModel } from "@vueuse/core";
import type { Type } from "./types";
import { watch, type Ref } from "vue";

export type UseSingleOrMultipleValueOptions = {
  defaultValue?: string | string[];
};

function validateModelValue(
  type: Type,
  modelValue?: string | string[] | undefined
) {
  if (type === "single") {
    if (Array.isArray(modelValue)) {
      console.error(`Invalid prop \`value\` of value \`${modelValue}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`value\` prop must be:
  - a string
  - \`undefined\`

If you want to use multiple values, use the \`AccordionRoot\` with type \`multiple\`.

Defaulting to \`undefined\`.`);
      return undefined;
    }
  } else if (type === "multiple") {
    if (typeof modelValue === "string" || typeof modelValue === "undefined") {
      console.error(`Invalid prop \`value\` of value \`${modelValue}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`value\` prop must be:
- an array of strings
- empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`);
      return [];
    }
  }
  return modelValue;
}

function validateDefaultValue(type: Type, defaultValue?: string | string[]) {
  if (type === "multiple") {
    if (Array.isArray(defaultValue)) {
      return defaultValue;
    } else if (defaultValue === undefined) {
      return [];
    } else {
      console.error(
        `Invalid prop \`defaultValue\` of value \`${defaultValue}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`defaultValue\` prop must be:
  - an array of strings
  - empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`
      );
      return [];
    }
  } else if (type === "single") {
    if (typeof defaultValue === "string") {
      return defaultValue;
    } else if (defaultValue === undefined) {
      return undefined;
    } else {
      console.error(
        `Invalid prop \`defaultValue\` of value \`${defaultValue}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`defaultValue\` prop must be:
  - a string
  - \`undefined\`

Defaulting to \`undefined\`.`
      );
      return undefined;
    }
  }
}

export function useSingleOrMultipleValue<
  P extends {
    modelValue?: string | string[];
    type: Type;
    defaultValue?: string | string[];
  },
  Name extends string
>(
  props: P,
  emits: (name: Name, ...args: any[]) => void,
  options: UseSingleOrMultipleValueOptions = {}
) {
  const { defaultValue } = options;

  const modelValue = useVModel(props, "modelValue", emits, {
    defaultValue: validateDefaultValue(props.type, defaultValue),
    passive: true,
  }) as Ref<string | string[] | undefined>;

  watch(
    [props.type, props.modelValue],
    () => {
      const validatedValue = validateModelValue(props.type, modelValue.value);
      if (modelValue.value !== validatedValue) {
        modelValue.value = validatedValue;
      }
    },
    { immediate: true }
  );

  function changeModelValue(value: string) {
    if (props.type === "single") {
      modelValue.value = value;
    } else {
      const modelValueArray = (modelValue.value as string[]) || [];
      if (modelValueArray.includes(value)) {
        const index = modelValueArray.findIndex((i) => i === value);
        modelValueArray.splice(index, 1);
      } else {
        modelValueArray.push(value);
      }
      modelValue.value = modelValueArray;
    }
  }

  return {
    modelValue,
    changeModelValue,
  };
}
