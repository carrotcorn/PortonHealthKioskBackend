import { users } from './seed-data/users'
import { User } from './model/user'
import { EggAppConfig } from 'egg'
import { sm3 } from 'sm-crypto'
import { Schema } from 'mongoose'
import { Clinic } from './model/clinic'
import { clinics } from './seed-data/clinics'

export default async function seedDatabase(config: EggAppConfig) {
  const users = await seedUsers(config)
  const clinics = await seedClinics(
    users
      .filter((user) => user.roles?.includes('clinic'))
      .reduce((acc, curr) => ({ ...acc, [curr.username]: curr._id }), {})
  )
  console.log(clinics)
}

const seedUsers = async (config) => {
  return User.create(
    users.map((user) => ({
      ...user,
      password: sm3(user.password + config.salt)
    }))
  )
}

type ClinicAdmins = { [key: string]: Schema.Types.ObjectId }
const seedClinics = async (admins: ClinicAdmins) => {
  return Clinic.create(
    clinics.map((clinic) => ({
      ...clinic,
      ownerId: admins[clinic.ownerId]
    }))
  )
}
