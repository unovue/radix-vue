<PropsTable :data="[
  {
    'name': 'defaultOpen',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': '-'
  },
  {
    'name': 'open',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': '-'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'update:open',
    'description': '',
    'type': '[value: boolean]'
  }
]" />
