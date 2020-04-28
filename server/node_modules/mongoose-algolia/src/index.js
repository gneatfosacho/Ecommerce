'use strict'

const algolia = require('algoliasearch')
const clc = require('cli-color')

module.exports = exports = function algoliaIntegration(schema, opts) {
  let options = {
    indexName: null,
    appId: null,
    apiKey: null,
    selector: null,
    defaults: null,
    mappings: null,
    virtuals: null,
    filter: null,
    populate: null,
    debug: false,
  }

  for (let key in opts) {
    if (key in options) options[key] = opts[key] //Override default options
  }

  if (!options.indexName)
    return console.error(clc.cyanBright('[Algolia-sync]'), ' -> ', clc.red.bold('Error'), ' -> Invalid index name')
  if (!options.appId || !options.apiKey)
    return console.error(
      clc.cyanBright('[Algolia-sync]'),
      ' -> ',
      clc.red.bold('Error'),
      ' -> Invalid algolia identification',
    )

  const client = algolia(options.appId, options.apiKey)

  require('./operations')(schema, options, client)

  schema.statics.SyncToAlgolia = function() {
    return require('./synchronize').call(this, options, client)
  }

  schema.statics.SetAlgoliaSettings = function(settings) {
    if (!settings)
      return console.error(clc.cyanBright('[Algolia-sync]'), ' -> ', clc.red.bold('Error'), ' -> Invalid settings')
    return require('./settings').call(this, settings, options, client)
  }
}
