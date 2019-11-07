let Schema = require('mongoose').Schema

let SchemaTransaction = new Schema({
    type: String,
    value: Number,
    category: String
})

module.exports = SchemaTransaction