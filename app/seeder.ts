import { users } from './seed-data/users'
import { User } from './model/user'
import { EggAppConfig } from 'egg'
import { sm3 } from 'sm-crypto'

export default async function seedDatabase (config: EggAppConfig) {
  const users = await seedUsers(config)
  console.log(users)
}

const seedUsers = async (config) => {
  return User.create(
    users.map((user) => ({
      ...user,
      password: sm3(user.password + config.salt)
    }))
  )
}
