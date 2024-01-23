<PropsTable :data="[
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
    'name': 'loop',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'modelValue',
    'description': '',
    'type': 'string',
    'required': false,
    'default': '-'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the expanded state of an item changes\n@arg {value: string | string[] }}</p>\n',
    'type': '[value: boolean]'
  }
]" />
