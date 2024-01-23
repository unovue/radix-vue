<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component | undefined',
    'required': false,
    'default': '\'nav\''
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'defaultPage',
    'description': '',
    'type': 'number | undefined',
    'required': false,
    'default': '1'
  },
  {
    'name': 'disabled',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'itemsPerPage',
    'description': '',
    'type': 'number | undefined',
    'required': false,
    'default': '10'
  },
  {
    'name': 'page',
    'description': '',
    'type': 'number | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'showEdges',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'siblingCount',
    'description': '',
    'type': 'number | undefined',
    'required': false,
    'default': '2'
  },
  {
    'name': 'total',
    'description': '',
    'type': 'number | undefined',
    'required': false,
    'default': '0'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'update:page',
    'description': '',
    'type': '[value: number]'
  }
]" />
