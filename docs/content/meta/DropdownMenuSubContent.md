<PropsTable :data="[
  {
    'name': 'align',
    'description': '<p>The preferred alignment against the trigger.\nMay change when collisions occur.</p>\n',
    'type': '\'start\' | \'center\' | \'end\' | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'alignOffset',
    'description': '<p>An offset in pixels from the &quot;start&quot; or &quot;end&quot; alignment options.</p>\n',
    'type': 'number | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'arrowPadding',
    'description': '<p>The padding between the arrow and the edges of the content.\nIf your content has border-radius, this will prevent it from\noverflowing the corners.</p>\n',
    'type': 'number | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'asChild',
    'description': '<p>Setting <code>asChild</code> to true has the same effect as setting <code>as</code> to <code>template</code>.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'avoidCollisions',
    'description': '<p>When true, overrides the side andalign preferences\nto prevent collisions with boundary edges.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'collisionBoundary',
    'description': '<p>The element used as the collision boundary. By default\nthis is the viewport, though you can provide additional\nelement(s) to be included in this check.</p>\n',
    'type': 'Element | (Element | null)[] | null | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'collisionPadding',
    'description': '<p>The distance in pixels from the boundary edges where collision\ndetection should occur. Accepts a number (same for all sides),\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\n',
    'type': 'number | Partial<Record<\'top\' | \'right\' | \'bottom\' | \'left\', number>> | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'disableOutsidePointerEvents',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'disableOutsideScroll',
    'description': '<p>Whether scrolling outside the <code>MenuContent</code> should be prevented\n(default: <code>false</code>)</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'forceMount',
    'description': '<p>Used to force mounting when more control is needed. Useful when\ncontrolling animation with Vue animation libraries.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'hideWhenDetached',
    'description': '<p>Whether to hide the content when the trigger becomes fully occluded.</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'loop',
    'description': '<p>Whether keyboard navigation should loop around</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'prioritizePosition',
    'description': '',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'side',
    'description': '<p>The preferred side of the trigger to render against when open.\nWill be reversed when collisions occur and avoidCollisions\nis enabled.</p>\n',
    'type': '\'top\' | \'right\' | \'bottom\' | \'left\' | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'sideOffset',
    'description': '<p>The distance in pixels from the trigger.</p>\n',
    'type': 'number | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'sticky',
    'description': '<p>The sticky behavior on the align axis. &quot;partial&quot; will keep the\ncontent in the boundary as long as the trigger is at least partially\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\nregardless.</p>\n',
    'type': '\'partial\' | \'always\' | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'trapFocus',
    'description': '<p>Whether focus should be trapped within the <code>MenuContent</code>\n(default: false)</p>\n',
    'type': 'boolean | undefined',
    'required': false,
    'default': '-'
  },
  {
    'name': 'updatePositionStrategy',
    'description': '',
    'type': '\'always\' | \'optimized\' | undefined',
    'required': false,
    'default': '-'
  }
]" />
<EmitsTable :data="[
  {
    'name': 'closeAutoFocus',
    'description': '<p>Event handler called when auto-focusing on close.\nCan be prevented.</p>\n',
    'type': '[event: Event]'
  },
  {
    'name': 'dismiss',
    'description': '<p>Handler called when the <code>DismissableLayer</code> should be dismissed</p>\n',
    'type': '[]'
  },
  {
    'name': 'entryFocus',
    'description': '',
    'type': '[event: Event]'
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
    'name': 'openAutoFocus',
    'description': '<p>Event handler called when auto-focusing on open.\nCan be prevented.</p>\n',
    'type': '[event: Event]'
  },
  {
    'name': 'pointerDownOutside',
    'description': '<p>Event handler called when the a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\nCan be prevented.</p>\n',
    'type': '[event: PointerDownOutsideEvent]'
  }
]" />
