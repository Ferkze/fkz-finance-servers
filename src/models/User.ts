import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }]
}, {
  timestamps: true
})

export default model('User', UserSchema)