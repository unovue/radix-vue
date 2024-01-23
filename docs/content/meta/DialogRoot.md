<PropsTable :data="[
  {
    'name': 'defaultOpen',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'modal',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'open',
    'description': '',
    'type': 'boolean | undefined',
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
