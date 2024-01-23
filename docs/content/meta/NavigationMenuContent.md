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
    'name': 'disableOutsidePointerEvents',
    'description': '<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'forceMount',
    'description': '<p>Used to force mounting when more control is needed. Useful when\ncontrolling animation with Vue animation libraries.</p>\n',
    'type': 'boolean',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'dismiss',
    'description': '<p>Handler called when the <code>DismissableLayer</code> should be dismissed</p>\n',
    'type': '[]'
  },
  {
    'name': 'escapeKeyDown',
    'description': '<p>Event handler called when the escape key is down.\nCan be prevented.</p>\n',
    'type': '[event: KeyboardEvent]'
  },
  {
    'name': 'focusOutside',
    'description': '<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\nCan be prevented.</p>\n',
    'type': '[event: FocusOutsideEvent]'
  },
  {
    'name': 'interactOutside',
    'description': '<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\nCan be prevented.</p>\n',
    'type': '[event: PointerDownOutsideEvent | FocusOutsideEvent]'
  },
  {
    'name': 'pointerDownOutside',
    'description': '<p>Event handler called when the a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\nCan be prevented.</p>\n',
    'type': '[event: PointerDownOutsideEvent]'
  }
]" />
