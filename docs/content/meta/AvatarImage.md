<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'img\''
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'src',
    'description': '',
    'type': 'string',
    'required': true
  }
]" />

<EmitsTable :data="[
  {
    'name': 'loadingStatusChange',
    'description': '<p>A callback providing information about the loading status of the image. &lt;br&gt;\nThis is useful in case you want to control more precisely what to render as the image is loading.</p>\n',
    'type': '[value: ImageLoadingStatus]'
  }
]" />
