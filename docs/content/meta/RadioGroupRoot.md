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
    'name': 'defaultValue',
    'description': '',
    'type': 'string',
    'required': false,
    'default': '-'
  },
  {
    'name': 'dir',
    'description': '',
    'type': 'Direction',
    'required': false,
    'default': '-'
  },
  {
    'name': 'disabled',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'loop',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'modelValue',
    'description': '',
    'type': 'string',
    'required': false,
    'default': '-'
  },
  {
    'name': 'name',
    'description': '',
    'type': 'string',
    'required': false,
    'default': '-'
  },
  {
    'name': 'orientation',
    'description': '',
    'type': 'DataOrientation',
    'required': false,
    'default': 'undefined'
  },
  {
    'name': 'required',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the expanded state of an item changes\n@arg {value: string | string[] }}</p>\n',
    'type': '[payload: string]'
  }
]" />
