import { Schema, model } from 'mongoose'

const SchemaCategory = new Schema({
  name: String,
})

export default model('Category', SchemaCategory)