<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'div\''
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'defaultValue',
    'description': '<p>The value of the item to show as pressed when initially rendered. Use when you do not need to control the state of the items.</p>\n',
    'type': 'string | string[]',
    'required': false
  },
  {
    'name': 'dir',
    'description': '<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n',
    'type': 'Direction',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>When <code>true</code>, prevents the user from interacting with the toggle group and all its items.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'loop',
    'description': '<p>When <code>loop</code> and <code>rovingFocus</code> is <code>true</code>, keyboard navigation will loop from last item to first, and vice versa.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'modelValue',
    'description': '<p>The controlled value of the pressed item. Can be bind as <code>v-model</code>.</p>\n',
    'type': 'string | string[]',
    'required': false
  },
  {
    'name': 'orientation',
    'description': '<p>The orientation of the component, which determines how focus moves: <code>horizontal</code> for left/right arrows and <code>vertical</code> for up/down arrows.</p>\n',
    'type': 'DataOrientation',
    'required': false
  },
  {
    'name': 'rovingFocus',
    'description': '<p>When <code>false</code>, navigating through the items using arrow keys will be disabled.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'type',
    'description': '<p>Determines whether a single or multiple items can be pressed at a time.</p>\n',
    'type': 'TypeEnum',
    'required': false,
    'default': '\'single\''
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the value changes.</p>\n',
    'type': '[payload: string]'
  }
]" />
