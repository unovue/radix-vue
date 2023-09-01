import { type Ref, ref } from 'vue'

type GetKeys<U> = U extends Record<infer K, any> ? K : never

type UnionToIntersection<U extends object> = {
  [K in GetKeys<U>]: U extends Record<K, infer T> ? T : never
}

export function useStateMachine<
  TMachine extends Record<string, Record<string, string>>,
  TState extends keyof TMachine,
  TEvent extends keyof UnionToIntersection<TMachine[keyof TMachine]>,
  TDefaultState extends TState,
>(
  initialState: TDefaultState,
  machine: TMachine,
) {
  const state = ref(initialState) as Ref<TState>

  const dispatch = (event: TEvent) => {
    const nextState = (machine[state.value][event] as unknown as TState) || state.value

    state.value = nextState
  }

  return [state, dispatch] as const
}
