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
    'name': 'defaultOpen',
    'description': '<p>The open state of the collapsible when it is initially rendered. &lt;br&gt; Use when you do not need to control its open state.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'disabled',
    'description': '<p>When <code>true</code>, prevents the user from interacting with the collapsible.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'open',
    'description': '<p>The controlled open state of the collapsible. Can be binded with <code>v-model</code>.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'undefined'
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:open',
    'description': '<p>Event handler called when the open state of the collapsible changes.</p>\n',
    'type': '[value: boolean]'
  }
]" />
