import { nextTick } from "vue";

export type UseEmitCancelableEvent =
  | "open"
  | "close"
  | "escape-key-down"
  | "pointer-down-outside"
  | "interact-outside";

export async function useEmitCancelableEvent(
  emit: ReturnType<typeof defineEmits>,
  name: UseEmitCancelableEvent,
  fn: () => void,
  event?: Event
) {
  event ||= new Event(name, { cancelable: true });
  emit(name, event);
  await nextTick();
  if (event.defaultPrevented) return;
  fn();
}
