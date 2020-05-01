import * as mongoose from 'mongoose'

export type UserQuery = mongoose.MongooseFilterQuery<Pick<IUser, '_id' | 'username' | 'password' | 'roles' | 'disabled'>>

export interface IUser extends mongoose.Document {
  username: string
  password: string
  roles?: string[]
  disabled?: boolean
}

export const User = mongoose.model<IUser>('User', new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  roles: [String],
  disabled: Boolean
}))
