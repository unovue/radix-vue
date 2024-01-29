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
    'name': 'dir',
    'description': '<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n',
    'type': '\'ltr\' | \'rtl\'',
    'required': false
  },
  {
    'name': 'scrollHideDelay',
    'description': '<p>If type is set to either <code>scroll</code> or <code>hover</code>, this prop determines the length of time, in milliseconds, &lt;br&gt; before the scrollbars are hidden after the user stops interacting with scrollbars.</p>\n',
    'type': 'number',
    'required': false,
    'default': '600'
  },
  {
    'name': 'type',
    'description': '<p>Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.</p>\n<p><code>auto</code> - means that scrollbars are visible when content is overflowing on the corresponding orientation. &lt;br&gt;\n<code>always</code> - means that scrollbars are always visible regardless of whether the content is overflowing.&lt;br&gt;\n<code>scroll</code> - means that scrollbars are visible when the user is scrolling along its corresponding orientation.&lt;br&gt;\n<code>hover</code> - when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.</p>\n',
    'type': '\'scroll\' | \'always\' | \'hover\' | \'auto\'',
    'required': false,
    'default': '\'hover\''
  }
]" />