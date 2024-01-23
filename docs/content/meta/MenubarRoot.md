<PropsTable :data="[
  {
    'name': 'defaultValue',
    'description': '',
    'type': 'string | undefined',
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
    'name': 'loop',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'modelValue',
    'description': '',
    'type': 'string | undefined',
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
