<PropsTable :data="[
  {
    'name': 'active',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': '-'
  },
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'a\''
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': '-'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'select',
    'description': '',
    'type': '[payload: MouseEvent]'
  }
]" />
