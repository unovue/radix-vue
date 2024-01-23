<PropsTable :data="[
  {
    'name': 'closeDelay',
    'description': '',
    'type': 'number | undefined',
    'required': false,
    'default': '300'
  },
  {
    'name': 'defaultOpen',
    'description': '',
    'type': 'false | undefined',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'open',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'undefined'
  },
  {
    'name': 'openDelay',
    'description': '',
    'type': 'number | undefined',
    'required': false,
    'default': '700'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'update:open',
    'description': '',
    'type': '[value: boolean]'
  }
]" />
