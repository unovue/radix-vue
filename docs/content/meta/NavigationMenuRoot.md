<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'nav\''
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
    'name': 'delayDuration',
    'description': '<p>The duration from when the pointer enters the trigger until the tooltip gets opened.</p>\n',
    'type': 'number',
    'required': false,
    'default': '200'
  },
  {
    'name': 'dir',
    'description': '',
    'type': 'Direction',
    'required': false
  },
  {
    'name': 'modelValue',
    'description': '',
    'type': 'string',
    'required': false,
    'default': 'undefined'
  },
  {
    'name': 'orientation',
    'description': '',
    'type': 'Orientation',
    'required': false,
    'default': '\'horizontal\''
  },
  {
    'name': 'skipDelayDuration',
    'description': '<p>How much time a user has to enter another trigger without incurring a delay again.</p>\n',
    'type': 'number',
    'required': false,
    'default': '300'
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '<p>Event handler called when the expanded state of an item changes</p>\n',
    'type': '[value: string]'
  }
]" />
