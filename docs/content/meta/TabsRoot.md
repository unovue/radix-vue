<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'activationMode',
    'description': '<p>Whether a tab is activated automatically or manually.</p>\n',
    'type': '\'automatic\' | \'manual\'',
    'required': false,
    'default': '\'automatic\''
  },
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
    'name': 'defaultValue',
    'description': '<p>The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'dir',
    'description': '<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n',
    'type': 'Direction',
    'required': false
  },
  {
    'name': 'modelValue',
    'description': '<p>The controlled value of the tab to activate. Can be bind as <code>v-model</code>.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'orientation',
    'description': '<p>The orientation the tabs are layed out.\nMainly so arrow navigation is done accordingly (left &amp; right vs. up &amp; down)</p>\n',
    'type': 'DataOrientation',
    'required': false,
    'default': '\'horizontal\''
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the value changes</p>\n',
    'type': '[payload: string]'
  }
]" />
