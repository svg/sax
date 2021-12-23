require(__dirname).test({
  xml: '<r class="&#60; and &#x3c; as well as &#38; and &#x26;">' +
    '&#60; and &#x3c; as well as &#38; and &#x26;' +
    '</r>',
  expect: [
    ['opentagstart', {name: 'R', attributes: {}}],
    ['attribute', {name: 'CLASS', value: '&lt; and &lt; as well as &amp; and &amp;'}],
    ['opentag', {
      name: 'R',
      attributes: {
        CLASS: '&lt; and &lt; as well as &amp; and &amp;'
      },
      isSelfClosing: false
    }],
    ['text', '< and < as well as & and &'],
    ['closetag', 'R']
  ]
})
