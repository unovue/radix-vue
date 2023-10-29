<script setup lang="ts">
import { Slot } from './Slot'

export type AsTag =
    | 'a'
    | 'button'
    | 'div'
    | 'form'
    | 'h2'
    | 'h3'
    | 'img'
    | 'input'
    | 'label'
    | 'li'
    | 'nav'
    | 'ol'
    | 'p'
    | 'span'
    | 'svg'
    | 'ul'
    | 'template'
    // eslint-disable-next-line @typescript-eslint/ban-types
    | ({} & string) // any other string

export interface PrimitiveProps {
    /**
     * Setting "asChild" to true has the same effect as setting "as" to "template".
     * @default false
     */
    asChild?: boolean
    /**
     * @default "div"
     */
    as?: AsTag
}

const props = withDefaults(defineProps<PrimitiveProps>(), {
    asChild: false,
    as: 'div',
})
</script>

<template>
    <component :is="props.asChild ? Slot : props.as">
        <slot />
    </component>
</template>
