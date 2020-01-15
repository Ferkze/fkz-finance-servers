import { Document, Schema, model } from 'mongoose'
import { AccountInterface } from './Account'

export interface UserInterface extends Document {
  email ?: string,
  firstName ?: string,
  lastName ?: string,
  accounts?: Array<AccountInterface>,
  fullName(): string,

  createdAt?: string,
  updatedAt?: string,
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }]
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)