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
    'description': '<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href=\'https://www.radix-vue.com/guides/composition.html\'>Composition</a> guide for more details.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'collapsible',
    'description': '<p>When type is &quot;single&quot;, allows closing content when clicking trigger for an open item.\nWhen type is &quot;multiple&quot;, this prop has no effect.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'defaultValue',
    'description': '<p>The default value of the item to expand when type is &quot;single&quot; or the default values of the items to expand when type is &quot;multiple&quot;.\nUse when you do not need to control the state of the item(s).</p>\n',
    'type': 'string | string[]',
    'required': false
  },
  {
    'name': 'dir',
    'description': '<p>The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.</p>\n',
    'type': '\'ltr\' | \'rtl\'',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>When <code>true</code>, prevents the user from interacting with the accordion and all its items</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'modelValue',
    'description': '<p>The controlled value of the item to expand when type is &quot;single&quot; or the controlled values of the items to expand when type is &quot;multiple&quot;.</p>\n',
    'type': 'string | string[]',
    'required': false
  },
  {
    'name': 'orientation',
    'description': '<p>The orientation of the accordion.</p>\n',
    'type': '\'vertical\' | \'horizontal\'',
    'required': false,
    'default': '\'vertical\''
  },
  {
    'name': 'type',
    'description': '<p>Determines whether one or multiple items can be opened at the same time.</p>\n',
    'type': '\'single\' | \'multiple\'',
    'required': true
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the expanded state of an item changes</p>\n',
    'type': '[value: string | string[]]'
  }
]" />

<SlotsTable :data="[
  {
    'name': 'modelValue',
    'description': 'Current active value',
    'type': 'string | string[] | undefined'
  }
]" />
