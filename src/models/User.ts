import { Document, Schema, model, Types } from 'mongoose'
import { AccountSchema, Account} from './Account'

export type UserType = {
  email ?: string
  firstName ?: string
  lastName ?: string
  accounts?: Types.DocumentArray<Account & Types.Embedded>
  fullName(): string

  createdAt?: string
  updatedAt?: string
}

export interface IUser extends UserType, Document {}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  accounts: [AccountSchema]
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (cb: Function) {return `${this.firstName} ${this.lastName}` }

export default model<IUser>('User', UserSchema)