'use strict'

const color = '#fafafa'
const borderColor = '#111'
const foregroundColor = '#fafafa'
const backgroundColor = '#222'
const cursorColor = 'rgba(200, 200, 200, .8)'

module.exports.decorateConfig = config => Object.assign({}, config, {
  color, borderColor, foregroundColor, backgroundColor, cursorColor,
  css: `
    ${config.css || ''}
    .tab_tab.tab_active {
      font-weight: 600;
    }

    .tab_tab.tab_active::before {
      border-bottom-color: ${backgroundColor} !important;
    }
  `
})
