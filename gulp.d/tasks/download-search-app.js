'use strict'

const fs = require('fs')
const fetch = require('node-fetch')

const stream = fs.createWriteStream('src/js/vendor/search-wc.js');

(async () => {
  const { body } = await fetch(`${process.env._SEARCH_SERVICE_HOST}/static/bundle/main.js`)
  await new Promise((resolve, reject) => {
    body.pipe(stream)
    body.on('error', reject)
    stream.on('finish', resolve)
  })
})()
