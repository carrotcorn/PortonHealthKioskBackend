import { users } from './seed-data/users'
import { User, IUser } from './model/user'
import { EggAppConfig } from 'egg'
import { sm3 } from 'sm-crypto'
import { Clinic, IClinic } from './model/clinic'
import { clinics } from './seed-data/clinics'
import { Patient, IPatient } from './model/patient'
import { patients } from './seed-data/patients'
import { Doctor, IDoctor } from './model/doctor'
import { doctors } from './seed-data/doctors'
import {
  InputType,
  inputName,
  inputLabel,
  CheckInFormField,
  ICheckInFormField
} from './model/checkinformfield'

export default async function seedDatabase(config: EggAppConfig) {
  const users = await seedUsers(config)
  const checkInFormFields = await seedCheckInFormFields()
  const clinics = await seedClinics(users, checkInFormFields)
  const patients = await seedPatients()
  const doctors = await seedDoctors()
  console.log(users, checkInFormFields, clinics, patients, doctors)
  // seed appointments
}

const seedUsers = async (config) => {
  return User.create(
    users.map((user) => ({
      ...user,
      password: sm3(user.password + config.salt)
    }))
  )
}

const seedClinics = async (
  users: IUser[],
  checkInFormFields: ICheckInFormField[]
) => {
  const defaultFormFieldIds = checkInFormFields
    .filter(
      (field) =>
        field.inputType === InputType.BIRTHDAY ||
        field.inputType === InputType.LAST_NAME
    )
    .map((field) => field._id)

  const clinicAdminUsernameToId = users
    .filter((user) => user.roles?.includes('clinic'))
    .reduce((acc, curr) => ({ ...acc, [curr.username]: curr._id }), {})

  return Clinic.create(
    clinics.map((clinic) => ({
      ...clinic,
      ownerId: clinicAdminUsernameToId[clinic.ownerId],
      formFields: defaultFormFieldIds
    }))
  )
}

const seedPatients = async () => {
  return Patient.create(patients)
}

const seedDoctors = async () => {
  return Doctor.create(doctors)
}

const seedCheckInFormFields = async () => {
  const inputFields: {}[] = []

  for (const field in InputType) {
    inputFields.push({
      inputType: field,
      name: inputName(field as InputType),
      label: inputLabel(field as InputType)
    })
  }

  return CheckInFormField.create(inputFields)
}

const seedAppointments = async (
  patients: IPatient[],
  clinics: IClinic[],
  doctors: IDoctor[]
) => {
  for (const clinic of clinics) {
  }
}
