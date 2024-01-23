<PropsTable :data="[
  {
    'name': 'defaultOpen',
    'description': '<p>The open state of the popover when it is initially rendered. Use when you do not need to control its open state.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'modal',
    'description': '<p>The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'open',
    'description': '<p>The controlled open state of the popover.</p>\n',
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
