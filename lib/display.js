const React = require('react')
const e = React.createElement

module.exports = ({display}) =>
  e('div', {className: 'display'}, display)
