import { Document, Schema, model } from 'mongoose'
import { UserInterface } from './User'

export type Account =  {
  _id: string
  name?: string
  startingBalance?: number
  owner?: UserInterface['_id']
  createdAt?: string
  updatedAt?: string
}
export type IAccount = Document & Account

export const AccountSchema = new Schema({
  name: String,
  startingBalance: Number,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true
})

export default model<IAccount>('Account', AccountSchema)