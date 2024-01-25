<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>When <code>true</code>, prevents the user from interacting with the item.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'textValue',
    'description': '<p>Optional text used for typeahead purposes. By default the typeahead behavior will use the <code>.textContent</code> of the item. &lt;br&gt;\nUse this when the content is complex, or you have non-textual content inside.</p>\n',
    'type': 'string',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'select',
    'description': '<p>Event handler called when the user selects a link (via mouse or keyboard).</p>\n<pre><code>Calling `event.preventDefault` in this handler will prevent the navigation menu from closing when selecting that link.\n</code></pre>\n',
    'type': '[event: Event]'
  }
]" />
