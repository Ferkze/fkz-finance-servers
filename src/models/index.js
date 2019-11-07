let model = require('mongoose').model

let SchemaTransaction = require('./transaction')

module.exports = {
  Transaction: model('transaction', SchemaTransaction
}