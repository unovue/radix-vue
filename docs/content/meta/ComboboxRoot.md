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
    'description': '',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'defaultValue',
    'description': '',
    'type': 'AcceptableValue',
    'required': false
  },
  {
    'name': 'dir',
    'description': '',
    'type': 'Direction',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'displayValue',
    'description': '',
    'type': '((val: AcceptableValue) => string)',
    'required': false
  },
  {
    'name': 'filterFunction',
    'description': '',
    'type': '((val: string[] | number[] | false[] | true[] | object[], term: string) => string[] | number[] | false[] | true[] | object[])',
    'required': false
  },
  {
    'name': 'modelValue',
    'description': '',
    'type': 'AcceptableValue',
    'required': false
  },
  {
    'name': 'multiple',
    'description': '',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'name',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'open',
    'description': '',
    'type': 'boolean',
    'required': false,
    'default': 'undefined'
  },
  {
    'name': 'searchTerm',
    'description': '',
    'type': 'string',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the expanded state of an item changes</p>\n',
    'type': '[value: AcceptableValue]'
  },
  {
    'name': 'update:open',
    'description': '',
    'type': '[value: boolean]'
  },
  {
    'name': 'update:searchTerm',
    'description': '',
    'type': '[value: string]'
  }
]" />
