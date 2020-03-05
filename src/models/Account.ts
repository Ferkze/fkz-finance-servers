import { Document, Schema, model } from 'mongoose'
import { UserInterface } from './User'

export type Account = Document & {
  _id: string
  name?: string,
  startingValue?: number,
  owner?: UserInterface['_id']
  createdAt?: string
  updatedAt?: string
}
export interface IAccount extends Account {}

const SchemaAccount = new Schema({
  name: String,
  startingValue: Number,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true
})

export default model<IAccount>('Account', SchemaAccount)