import { users } from './seed-data/users'
import { User } from './model/user'
import { EggAppConfig } from 'egg'
import { sm3 } from 'sm-crypto'
import { Schema } from 'mongoose'
import { Clinic } from './model/clinic'
import { clinics } from './seed-data/clinics'
import { Patient } from './model/patient'
import { patients } from './seed-data/patients'

export default async function seedDatabase(config: EggAppConfig) {
  const users = await seedUsers(config)
  const clinics = await seedClinics(
    users
      .filter((user) => user.roles?.includes('clinic'))
      .reduce((acc, curr) => ({ ...acc, [curr.username]: curr._id }), {})
  )
  const patients = await seedPatients()
  console.log(clinics, patients)
  // seed doctors
  // seed appointments
  // seed form fields
}

const seedUsers = async (config) => {
  return User.create(
    users.map((user) => ({
      ...user,
      password: sm3(user.password + config.salt)
    }))
  )
}

type idMap = { [key: string]: Schema.Types.ObjectId }
const seedClinics = async (admins: idMap) => {
  return Clinic.create(
    clinics.map((clinic) => ({
      ...clinic,
      ownerId: admins[clinic.ownerId]
    }))
  )
}

const seedPatients = async () => {
  return Patient.create(patients)
}
