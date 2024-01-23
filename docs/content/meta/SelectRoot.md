<PropsTable :data="[
  {
    'name': 'autocomplete',
    'description': '',
    'type': 'string',
    'required': false,
    'default': '-'
  },
  {
    'name': 'defaultOpen',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': '-'
  },
  {
    'name': 'defaultValue',
    'description': '',
    'type': 'string',
    'required': false,
    'default': '\'\''
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
    'default': '-'
  },
  {
    'name': 'modelValue',
    'description': '',
    'type': 'string',
    'required': false,
    'default': 'undefined'
  },
  {
    'name': 'name',
    'description': '',
    'type': 'string',
    'required': false,
    'default': '-'
  },
  {
    'name': 'open',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'undefined'
  },
  {
    'name': 'orientation',
    'description': '',
    'type': 'DataOrientation',
    'required': false,
    'default': '\'vertical\''
  },
  {
    'name': 'required',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': '-'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the expanded state of an item changes\n@arg {value: string | string[] }}</p>\n',
    'type': '[value: string]'
  },
  {
    'name': 'update:open',
    'description': '',
    'type': '[value: boolean]'
  }
]" />
