import { withDefault } from '@/shared/withDefault'
import { DialogRoot as Root, DialogTrigger as Trigger } from '../'

export const DialogTrigger = withDefault(Trigger, {
  props: attrs => ({
    as: 'span',
    class: `class-1 classs-extra ${attrs.class}`,
  }),
  attrs: {
    id: 'custom-id',
    tabindex: 0,
  },
})

export const DialogRoot = withDefault(Root)
