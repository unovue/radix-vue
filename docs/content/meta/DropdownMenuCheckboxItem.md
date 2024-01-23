<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'checked',
    'description': '',
    'type': 'CheckedState | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'disabled',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'textValue',
    'description': '',
    'type': 'string | undefined',
    'required': false,
    'default': '-'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'select',
    'description': '',
    'type': '[event: Event]'
  },
  {
    'name': 'update:checked',
    'description': '',
    'type': '[payload: boolean]'
  }
]" />
