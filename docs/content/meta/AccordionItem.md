<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '-'
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': '-'
  },
  {
    'name': 'disabled',
    'description': '<p>Whether or not an accordion item is disabled from user interaction.\nWhen true, prevents the user from interacting with the item.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': '-'
  },
  {
    'name': 'value',
    'description': '<p>A string value for the accordion item. All items within an accordion should use a unique value.</p>\n',
    'type': 'string',
    'required': true,
    'default': '-'
  }
]" />
