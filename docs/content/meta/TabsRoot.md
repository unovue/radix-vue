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
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'dir',
    'description': '<p>The direction of navigation between toolbar items.</p>\n',
    'type': 'Direction',
    'required': false
  },
  {
    'name': 'modelValue',
    'description': '',
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
    'description': '<p>Event handler called when the expanded state of an item changes</p>\n',
    'type': '[payload: string]'
  }
]" />
