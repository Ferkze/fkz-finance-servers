import { Document, Schema, model } from 'mongoose'
import { UserInterface } from './User'

export interface AccountInterface extends Document {
  name?: string,
  owner?: UserInterface['_id'],

  createdAt?: string
  updatedAt?: string
}

const SchemaAccount = new Schema({
  name: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true
})

export default model<AccountInterface>('Account', SchemaAccount)