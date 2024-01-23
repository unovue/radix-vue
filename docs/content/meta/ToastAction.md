<PropsTable :data="[
  {
    'name': 'altText',
    'description': '<p>A short description for an alternate way to carry out the action. For screen reader users\nwho will not be able to navigate to the button easily/quickly.</p>\n',
    'type': 'string',
    'required': true,
    'default': '-'
  },
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  }
]" />
