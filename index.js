'use strict'

const color = '#fafafa'
const borderColor = '#111'
const backgroundColor = '#222'
const cursorColor = 'rgba(200, 200, 200, .8)'

const gray = { color, borderColor, backgroundColor, cursorColor }

module.exports.decorateConfig = config => Object.assign({}, config, gray)
