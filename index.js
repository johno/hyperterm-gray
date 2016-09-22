'use strict'

const color = '#222'
const borderColor = '#fafafa'
const foregroundColor = '#222'
const backgroundColor = '#fafafa'
const inactiveTabColor = '#f1f1f1'
const cursorColor = 'rgba(200, 200, 200, .7)'
const colors = [
  '#222',
  '#555',
  '#555',
  '#555',
  '#555',
  '#555',
  '#555',
  '#ccc',
  '#444',
  '#555',
  '#555',
  '#555',
  '#555',
  '#555',
  '#555',
  '#ccc'
]

module.exports.decorateConfig = config => Object.assign({}, config, {
  color, borderColor, foregroundColor, backgroundColor, cursorColor,
  css: `
    ${config.css || ''}
    .tab_tab {
      color: ${foregroundColor} !important;
    }

    .tab_tab.tab_active {
      font-weight: 600;
      color: ${foregroundColor} !important;
      background-color: ${backgroundColor} !important;
    }

    .tabs_nav {
      background-color: ${inactiveTabColor} !important;
    }

    .tab_tab.tab_active::before {
      border-bottom-color: ${backgroundColor} !important;
    }
  `
})
