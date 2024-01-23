<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '-'
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': '-'
  },
  {
    'name': 'getValueLabel',
    'description': '',
    'type': '((value: number, max: number) => string)',
    'required': false,
    'default': '`${Math.round((value / max) * DEFAULT_MAX)}%`'
  },
  {
    'name': 'max',
    'description': '',
    'type': 'number',
    'required': false,
    'default': 'DEFAULT_MAX'
  },
  {
    'name': 'modelValue',
    'description': '',
    'type': 'number | null',
    'required': false,
    'default': '-'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'update:max',
    'description': '',
    'type': '[value: number]'
  },
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the expanded state of an item changes\n@arg {value: string | string[] }}</p>\n',
    'type': '[value: string[]]'
  }
]" />
