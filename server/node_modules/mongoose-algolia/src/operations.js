'use strict'

const utils = require('./utils')

module.exports = function(schema, options, client) {
  schema.pre('save', function(next) {
    let isModified = false

    let relevantKeys = utils.GetRelevantKeys(this.toJSON(), options.selector)
    if (relevantKeys && relevantKeys.length) {
      relevantKeys.forEach(key => {
        if (this.isModified(key)) isModified = true
      })
    } else {
      if (this.isModified()) isModified = true
    }

    this.algoliaWasNew = this.isNew
    this.algoliaWasModified = isModified
    next()
  })

  schema.post('save', function() {
    RunActionOnIndices(this, SyncItem)
  })

  schema.post('remove', function() {
    RunActionOnIndices(this, RemoveItem)
  })

  schema.methods.SyncToAlgolia = function() {
    this.algoliaWasModified = true
    this.algoliaWasNew = false
    RunActionOnIndices(this, SyncItem)
  }

  schema.methods.RemoveFromAlgolia = function() {
    RunActionOnIndices(this, RemoveItem)
  }

  schema.methods.getAlgoliaObject = function() {
    return this.toObject({
      versionKey: false,
      virtuals: true,
      transform: (doc, ret) => {
        if (doc.constructor.modelName !== this.constructor.modelName) return ret

        ret = utils.ApplyVirtuals(ret, options.virtuals)
        ret = utils.ApplyMappings(ret, options.mappings)
        ret = utils.ApplyDefaults(ret, options.defaults)
        ret = utils.ApplySelector(ret, options.selector)

        ret.objectID = doc._id
        delete ret._id

        return ret
      },
    })
  }

  function RunActionOnIndices(doc, action) {
    utils.GetIndexName(doc, options.indexName).then(indices => {
      if (indices instanceof Array) {
        indices.forEach(index => action(doc, client.initIndex(index)))
      } else {
        action(doc, client.initIndex(indices))
      }
    })
  }

  function RemoveItem(doc, index) {
    index.deleteObject(doc._id.toString(), err => {
      if (err) return utils.Logger.Error('Error', err)
      if (options.debug) utils.Logger.Success('Deleted', doc._id)
    })
  }

  function SyncItem(doc, index) {
    if (options.filter && !options.filter(doc._doc)) return RemoveItem(doc, index)
    if (!doc.algoliaWasNew && !doc.algoliaWasModified) return

    utils
      .ApplyPopulation(doc, options.populate)
      .then(populated => {
        index.addObject(populated.getAlgoliaObject(), (err, content) => {
          if (err) return utils.Logger.Error('Error', err)
          if (options.debug) utils.Logger.Success(doc.algoliaWasNew ? 'Created' : 'Updated', content.objectID)
        })
      })
      .catch(err => {
        return utils.Logger.Error('Error (at population)', err)
      })
  }
}
