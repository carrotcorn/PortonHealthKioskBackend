import { IAppointment, Appointment, IClinic, Clinic, Doctor, IDoctor } from '../model'
import { MongooseFilterQuery } from 'mongoose'
import { Service } from 'egg'

export default class PublicService extends Service {
  public async findClinics (conditions: MongooseFilterQuery<Pick<IClinic, 'address' | 'phone' | 'email' | 'name' | 'ownerId'>>) {
    return Clinic.find(conditions).exec()
  }

  public async findAppointments (conditions: MongooseFilterQuery<Pick<IAppointment, '_id' | 'familyName' | 'givenName' | 'age' | 'time' | 'address' | 'phone' | 'email' | 'insurance' | 'clinicId' | 'checkedIn'>>) {
    return Appointment.find(conditions).exec()
  }

  public async checkinAppointment (conditions: MongooseFilterQuery<Pick<IAppointment, '_id' | 'familyName' | 'givenName' | 'age' | 'time' | 'address' | 'phone' | 'email' | 'insurance' | 'clinicId' | 'checkedIn'>>) {
    return Appointment.findOneAndUpdate(conditions, { checkedIn: new Date() }).exec()
  }

  public async findDoctors (conditions: MongooseFilterQuery<Pick<IDoctor, 'phone' | 'email' | '_id' | 'doctorname'>>) {
    return Doctor.find(conditions).exec()
  }
}
