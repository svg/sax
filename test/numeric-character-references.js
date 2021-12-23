require(__dirname).test({
  xml: '<r class="&#60; and &#x3c; as well as &#38; and &#x26;">' +
    '&#60; and &#x3c; as well as &#38; and &#x26;' +
    '</r>',
  expect: [
    ['opentagstart', {name: 'R', attributes: {}}],
    ['attribute', {name: 'CLASS', value: '&#60; and &#x3c; as well as &#38; and &#x26;'}],
    ['opentag', {
      name: 'R',
      attributes: {
        CLASS: '&#60; and &#x3c; as well as &#38; and &#x26;'
      },
      isSelfClosing: false
    }],
    ['text', '&#60; and &#x3c; as well as &#38; and &#x26;'],
    ['closetag', 'R']
  ]
})
