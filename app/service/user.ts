import { Service } from 'egg'
import { IUser, User } from '../model'
import { MongooseFilterQuery } from 'mongoose'

export default class UserService extends Service {
  public async findUsers (conditions: MongooseFilterQuery<Pick<IUser, '_id' | 'username' | 'password' | 'roles'>>) {
    return User.find(conditions)
  }

  public async createUser (doc: IUser) {
    const user = new User(doc)
    return user.save()
  }

  public async updateUser (conditions: MongooseFilterQuery<Pick<IUser, '_id' | 'username' | 'password' | 'roles'>>, doc: IUser) {
    return User.update(conditions, doc).exec()
  }
}
