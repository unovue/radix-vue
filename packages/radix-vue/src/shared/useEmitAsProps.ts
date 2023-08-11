import { getCurrentInstance, camelize, toHandlerKey } from "vue";

// Vue doesn't have emits forwarding, in order to bind the emits we have to convert events into `onXXX` handlers
// issue: https://github.com/vuejs/core/issues/5917
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
