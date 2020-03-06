import { Document, Schema, model, Types } from 'mongoose'
import { AccountSchema, Account} from './Account'

export interface UserInterface extends Document {
  email ?: string,
  firstName ?: string,
  lastName ?: string,
  accounts?: Types.DocumentArray<Account & Types.Embedded>,
  fullName(): string,

  createdAt?: string,
  updatedAt?: string,
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  accounts: [AccountSchema]
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)