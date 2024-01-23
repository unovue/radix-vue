<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'ol\''
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': '-'
  },
  {
    'name': 'hotkey',
    'description': '<p>The keys to use as the keyboard shortcut that will move focus to the toast viewport.</p>\n',
    'type': 'string[]',
    'required': false,
    'default': 'VIEWPORT_DEFAULT_HOTKEY'
  },
  {
    'name': 'label',
    'description': '<p>An author-localized label for the toast viewport to provide context for screen reader users\nwhen navigating page landmarks. The available <code>{hotkey}</code> placeholder will be replaced for you.</p>\n',
    'type': 'string',
    'required': false,
    'default': '\'Notifications ({hotkey})\''
  }
]" />
