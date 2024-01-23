<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'li\''
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': '-'
  },
  {
    'name': 'defaultOpen',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'duration',
    'description': '<p>Time in milliseconds that toast should remain visible for. Overrides value\ngiven to <code>ToastProvider</code>.</p>\n',
    'type': 'number',
    'required': false,
    'default': '-'
  },
  {
    'name': 'forceMount',
    'description': '<p>Used to force mounting when more control is needed. Useful when\ncontrolling animation with Vue animation libraries.</p>\n',
    'type': 'boolean',
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
    'name': 'type',
    'description': '',
    'type': '\'foreground\' | \'background\'',
    'required': false,
    'default': '\'foreground\''
  }
]" />

<EmitsTable :data="[
  {
    'name': 'close',
    'description': '',
    'type': '[]'
  },
  {
    'name': 'escapeKeyDown',
    'description': '<p>Event handler called when the escape key is down.\nCan be prevented.</p>\n',
    'type': '[event: KeyboardEvent]'
  },
  {
    'name': 'pause',
    'description': '',
    'type': '[]'
  },
  {
    'name': 'resume',
    'description': '',
    'type': '[]'
  },
  {
    'name': 'swipeCancel',
    'description': '',
    'type': '[event: SwipeEvent]'
  },
  {
    'name': 'swipeEnd',
    'description': '',
    'type': '[event: SwipeEvent]'
  },
  {
    'name': 'swipeMove',
    'description': '',
    'type': '[event: SwipeEvent]'
  },
  {
    'name': 'swipeStart',
    'description': '',
    'type': '[event: SwipeEvent]'
  },
  {
    'name': 'update:open',
    'description': '',
    'type': '[value: boolean]'
  }
]" />
