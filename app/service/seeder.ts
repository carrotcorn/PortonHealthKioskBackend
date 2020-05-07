import { users } from '../seed-data/users'
import { User, IUser } from '../model/user'
import { Service } from 'egg'
import { sm3 } from 'sm-crypto'
import { Clinic, IClinic } from '../model/clinic'
import { clinics } from '../seed-data/clinics'
import { Patient, IPatient } from '../model/patient'
import { patients } from '../seed-data/patients'
import { Doctor, IDoctor } from '../model/doctor'
import { doctors } from '../seed-data/doctors'
import {
  addDays,
  addMinutes,
  roundToNearestMinutes,
  subMinutes
} from 'date-fns'
import {
  InputType,
  inputName,
  inputLabel,
  CheckInFormField,
  ICheckInFormField
} from '../model/checkinformfield'
import { Appointment } from '../model/appointment'

export default class SeederService extends Service {
  async seedDatabase () {
    const users = (await User.exists({}))
      ? await User.find()
      : await this.seedUsers(this.app.config)
    const checkInFormFields = (await CheckInFormField.exists({}))
      ? await CheckInFormField.find()
      : await this.seedCheckInFormFields()
    const clinics = (await Clinic.exists({}))
      ? await Clinic.find()
      : await this.seedClinics(users, checkInFormFields)
    const patients = (await Patient.exists({}))
      ? await Patient.find()
      : await this.seedPatients()
    const doctors = (await Doctor.exists({}))
      ? await Doctor.find()
      : await this.seedDoctors()
    this.seedAppointments(patients, clinics, doctors)
  }

  async seedUsers (config) {
    return User.create(
      users.map((user) => ({
        ...user,
        password: sm3(user.password + config.salt)
      }))
    )
  }

  async seedClinics (users: IUser[], checkInFormFields: ICheckInFormField[]) {
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

  async seedPatients () {
    return Patient.create(patients)
  }

  async seedDoctors () {
    return Doctor.create(doctors)
  }

  async seedCheckInFormFields () {
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

  async seedAppointments (
    patients: IPatient[],
    clinics: IClinic[],
    doctors: IDoctor[]
  ) {
    const startTime = (await Appointment.exists({}))
      ? (await Appointment.find().sort({ 'time.start': -1 }).limit(1))[0].time
        .end
      : subMinutes(roundToNearestMinutes(new Date(), { nearestTo: 15 }), 15)
    const endTime = addDays(startTime, 1)
    console.log('start time', startTime, 'end time', endTime)

    for (const clinic of clinics) {
      const appointments: {}[] = []

      for (
        let currTime = startTime;
        currTime < endTime;
        currTime = addMinutes(currTime, 15)
      ) {
        for (let i = 0; i < doctors.length; i++) {
          const doctorId = doctors[i]._id
          const patientId = patients[i]._id
          const clinicId = clinic._id

          appointments.push({
            patientId,
            clinicId,
            doctorId,
            time: {
              start: currTime,
              end: addMinutes(currTime, 15)
            }
          })
        }
      }

      Appointment.create(appointments)
    }
  }
}
