import { getCurrentInstance, camelize, toHandlerKey } from "vue";

export const useEmitAsProps = <Name extends string>(
  emit: (name: Name, ...args: any[]) => void
) => {
  const vm = getCurrentInstance();

  const events = vm?.type.emits as Name[];
  const result: Record<string, any> = {};

  events.forEach((ev) => {
    result[toHandlerKey(camelize(ev))] = (...arg: any) => emit(ev, ...arg);
  });
  return result;
};
