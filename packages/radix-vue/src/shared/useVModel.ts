import { Ref, toRef, ref, watchEffect } from "vue";

export interface UseVModel<T> {
  value: Ref<T>;
  change: (value: T) => void;
}

export function useVModel<T>(
  props: { [key: string]: T },
  name: string,
  emit: (eventName: string, payload: T) => void
): UseVModel<T> {
  const modelValue: Ref<T> =
    props[name] !== undefined ? toRef(props, name) : ref<T>(null!);

  watchEffect(() => {
    emit(`update:${name}`, modelValue.value);
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
