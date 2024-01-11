import type { ParamType, PropDescriptor } from 'vue-inbrowser-compiler-independent-utils'

function parseType(item: ParamType, text: string): string {
  if (item.name === 'union')
    return text += item.elements?.map((el: ParamType) => parseType(el, text)).join(' | ')
  else if (item.name === 'Array')
    return text += `(${item.elements?.map(((el: ParamType) => parseType(el, text))).join(',')})[]`
  else
    return item.name
}

export function parsePropsType(props: PropDescriptor) {
  if (!props.type)
    return ''
  return parseType(props.type, '')
}
