<PropsTable :data="[
  {
    'name': 'defaultOpen',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'modal',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'open',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'undefined'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'update:open',
    'description': '',
    'type': '[value: boolean]'
  }
]" />
