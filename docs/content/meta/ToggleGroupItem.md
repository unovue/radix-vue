<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component | undefined',
    'required': false,
    'default': '\'button\''
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'defaultValue',
    'description': '<p>The pressed state of the toggle when it is initially rendered. Use when you do not need to control its open state.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'disabled',
    'description': '<p>Disables the trigger.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'pressed',
    'description': '<p>The controlled pressed state of the toggle.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'value',
    'description': '<p>A string value for the toggle group item. All items within a toggle group should use a unique value.</p>\n',
    'type': 'string',
    'required': true,
    'default': '-'
  }
]" />
