function parseType(item, text) {
  let _a, _b
  if (item.name === 'union')
    return text += (_a = item.elements) === null || _a === void 0 ? void 0 : _a.map(el => parseType(el, text)).join(' | ')
  else if (item.name === 'Array')
    return text += `(${(_b = item.elements) === null || _b === void 0 ? void 0 : _b.map((el => parseType(el, text))).join(',')})[]`
  else
    return item.name
}
export function parsePropsType(props) {
  if (!props.type)
    return ''
    // @ts-expect-error the type is wrong in package
  return parseType(props.type, '')
}
