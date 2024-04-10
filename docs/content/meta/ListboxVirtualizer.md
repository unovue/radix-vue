<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'estimateSize',
    'description': '<p>Estimated size (in px) of each item</p>\n',
    'type': 'number',
    'required': false
  },
  {
    'name': 'options',
    'description': '<p>List of items</p>\n',
    'type': 'AcceptableValue[]',
    'required': true
  },
  {
    'name': 'textContent',
    'description': '<p>text content for each item to achieve type-ahead feature</p>\n',
    'type': '((option: AcceptableValue) => string)',
    'required': false
  }
]" />

<SlotsTable :data="[
  {
    'name': 'option',
    'description': '',
    'type': 'string | number | false | true | Record<string, any>'
  }
]" />
