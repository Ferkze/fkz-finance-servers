import { Document, Schema, model } from 'mongoose'
import { AccountInterface } from './Account'
import Category, { CategoryInterface } from './Category'

enum TransactionType {
  'DEBIT',
  'CREDIT',
  'TRANFERENCE',
}
export interface TransactionInterface extends Document {
  amount?: number,
  date?: Date,
  account: AccountInterface,
  category: CategoryInterface,
  type: TransactionType

  createdAt?: string,
  updatedAt?: string,
}

const SchemaTransaction = new Schema({
  amount: Number,
  account: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  category: Category.schema,
  date: Date,
  type: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

export default model<TransactionInterface>('Transaction', SchemaTransaction)