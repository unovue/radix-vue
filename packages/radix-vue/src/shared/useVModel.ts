import { type Ref, toRef, ref, watch, type ToRef } from "vue";

export interface UseVModel<T> {
  value: Ref<T> | ToRef<T>;
  change: (value: T) => void;
}

export function useVModel<T>(
  props: { [key: string]: T },
  name: string,
  emit: (event: any, ...args: any[]) => void
): UseVModel<T> {
  const modelValue: Ref<T> =
    props[name] !== undefined ? toRef(props, name) : ref<T>(false);

  watch(modelValue, (newValue) => {
    emit(`update:${name}`, newValue);
  });

  function changeModelValue(value: T) {
    if (props[name] !== undefined) {
      emit(`update:${name}`, value);
    } else {
      modelValue.value = value;
    }
  }

  return { value: modelValue, change: changeModelValue };
}
