
const cli = require('contentful-extension-cli')
const config = require('./config.js')

const SPACE_ID = config.SPACE_ID
const ACCESS_TOKEN = config.CMA_ACCESS_TOKEN

const client = cli.createClient({
  accessToken: ACCESS_TOKEN,
  spaceId: SPACE_ID,
  host: 'https://api.contentful.com'
})

client.save({
  id: config.id,
  name: config.name,
  src: config.src,
  fieldTypes: config.fieldTypes
}).then(function(savedExtension) {
  console.log('Saved!')
})
