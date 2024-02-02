<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'autocomplete',
    'description': '<p>Native html input <code>autocomplete</code> attribute.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'defaultOpen',
    'description': '<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'defaultValue',
    'description': '<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\n',
    'type': 'string',
    'required': false,
    'default': '\'\''
  },
  {
    'name': 'dir',
    'description': '<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n',
    'type': '\'ltr\' | \'rtl\'',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>When <code>true</code>, prevents the user from interacting with Select</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'modelValue',
    'description': '<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'name',
    'description': '<p>The name of the Select. Submitted with its owning form as part of a name/value pair.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'open',
    'description': '<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'required',
    'description': '<p>When <code>true</code>, indicates that the user must select a value before the owning form can be submitted.</p>\n',
    'type': 'boolean',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the value changes.</p>\n',
    'type': '[value: string]'
  },
  {
    'name': 'update:open',
    'description': '<p>Event handler called when the open state of the context menu changes.</p>\n',
    'type': '[value: boolean]'
  }
]" />
