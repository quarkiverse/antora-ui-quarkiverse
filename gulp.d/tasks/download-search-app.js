'use strict'

const fs = require('fs')
const fetch = require('node-fetch')

module.exports = async function () {
  // This search script is already minified, so we don't want it to be "re-processed"
// hence we are going to download it as a ***.min.js:
  const path = 'src/js/vendor/search-wc.min.js'

  try {
    fs.rmSync(path)
  } catch (e) {
    console.debug(`Couldn't remove ${path}. File is not there as it was a first run? ${e}`)
  }

  const stream = fs.createWriteStream(path)
  const { body } = await fetch(`${process.env._SEARCH_SERVICE_HOST}/static/bundle/main.js`)
  return new Promise((resolve, reject) => {
    body.pipe(stream)
    body.on('error', reject)
    stream.on('finish', () => {
      stream.close()
      resolve()
      console.debug(`Finished downloading ${path}`)
    })
  })
}
