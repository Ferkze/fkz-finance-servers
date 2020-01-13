import { Schema, model } from 'mongoose'
import Category from './Category'

const SchemaTransaction = new Schema({
  amount: Number,
  account: {
    type: Schema.Types.ObjectId,
    ref: 'Account'
  },
  category: Category.schema,
  date: Date,
  type: String,
}, {
  timestamps: true
})

export default model('Transaction', SchemaTransaction)