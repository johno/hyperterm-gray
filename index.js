'use strict'

const color = '#fafafa'
const borderColor = '#777'
const foregroundColor = '#fafafa'
const backgroundColor = '#222'
const inactiveTabColor = '#111'
const cursorColor = 'rgba(200, 200, 200, .8)'

module.exports.decorateConfig = config => Object.assign({}, config, {
  color, borderColor, foregroundColor, backgroundColor, cursorColor,
  css: `
    ${config.css || ''}
    .tab_tab {
      color: ${borderColor} !important;
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
