import { Schema, model } from 'mongoose'

const SchemaAccount = new Schema({
  name: String
}, {
  timestamps: true
})

export default model('Account', SchemaAccount)