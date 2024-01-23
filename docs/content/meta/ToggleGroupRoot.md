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
    'name': 'defaultValue',
    'description': '',
    'type': 'string | string[] | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'dir',
    'description': '',
    'type': 'Direction | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'disabled',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'loop',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'modelValue',
    'description': '',
    'type': 'string | string[] | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'orientation',
    'description': '',
    'type': 'DataOrientation | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'rovingFocus',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'type',
    'description': '',
    'type': 'TypeEnum | undefined',
    'required': false,
    'default': '\'single\''
  }
]" />
<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the expanded state of an item changes\n@arg {value: string | string[] }}</p>\n',
    'type': '[payload: string]'
  }
]" />
