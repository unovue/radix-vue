<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'active',
    'description': '<p>Used to identify the link as the currently active page.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'a\''
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'select',
    'description': '<p>Event handler called when the user selects a link (via mouse or keyboard).</p>\n<pre><code>Calling `event.preventDefault` in this handler will prevent the navigation menu from closing when selecting that link.\n</code></pre>\n',
    'type': '[payload: MouseEvent]'
  }
]" />
