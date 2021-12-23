require(__dirname).test({
  xml: '<r class="&#60; and &#x3c; as well as &#38; and &#x26;">' +
    '&#60; and &#x3c; as well as &#38; and &#x26;' +
    '</r>',
  expect: [
    ['opentagstart', {name: 'R', attributes: {}}],
    ['attribute', {name: 'CLASS', value: '< and < as well as & and &'}],
    ['opentag', {
      name: 'R',
      attributes: {
        CLASS: '< and < as well as & and &'
      },
      isSelfClosing: false
    }],
    ['text', '< and < as well as & and &'],
    ['closetag', 'R']
  ]
})
