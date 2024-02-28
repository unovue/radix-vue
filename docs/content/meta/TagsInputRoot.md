<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'addOnPaste',
    'description': '<p>When <code>true</code>, allow adding tags on paste. Work in conjunction with delimiter prop.</p>\n',
    'type': 'boolean',
    'required': false
  },
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
    'name': 'defaultValue',
    'description': '<p>The value of the tags that should be added. Use when you do not need to control the state of the tags input</p>\n',
    'type': 'string[]',
    'required': false,
    'default': '[]'
  },
  {
    'name': 'delimiter',
    'description': '<p>The character to trigger the addition of a new tag. Also used to split tags for <code>@paste</code> event</p>\n',
    'type': 'string',
    'required': false,
    'default': '\',\''
  },
  {
    'name': 'dir',
    'description': '<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n',
    'type': '\'ltr\' | \'rtl\'',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>When <code>true</code>, prevents the user from interacting with the tags input.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'duplicate',
    'description': '<p>When <code>true</code>, allow duplicated tags.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'id',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'max',
    'description': '<p>Maximum number of tags.</p>\n',
    'type': 'number',
    'required': false,
    'default': '0'
  },
  {
    'name': 'modelValue',
    'description': '<p>The controlled value of the tags input. Can be bind as <code>v-model</code>.</p>\n',
    'type': 'string[]',
    'required': false
  },
  {
    'name': 'name',
    'description': '<p>The name of the tags input submitted with its owning form as part of a name/value pair.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'required',
    'description': '<p>When <code>true</code>, indicates that the user must add the tags input before the owning form can be submitted.</p>\n',
    'type': 'boolean',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'invalid',
    'description': '<p>Event handler called when the value is invalid</p>\n',
    'type': '[payload: string]'
  },
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the value changes</p>\n',
    'type': '[payload: string[]]'
  }
]" />

<SlotsTable :data="[
  {
    'name': 'modelValue',
    'description': '<p>Current input values</p>\n',
    'type': 'string[]'
  }
]" />
