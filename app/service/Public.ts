import { IAppointment, Appointment, IClinic, Clinic } from '../model'
import DataService from './DataService'
import { MongooseFilterQuery } from 'mongoose'

export default class PublicService extends DataService {
  public async findClinics (conditions: MongooseFilterQuery<Pick<IClinic, 'address' | 'phone' | 'email' | 'name' | 'ownerId'>>) {
    return Clinic.find(conditions).exec()
  }

  public async findAppointments (conditions: MongooseFilterQuery<Pick<IAppointment, '_id' | 'familyName' | 'givenName' | 'age' | 'time' | 'address' | 'phone' | 'email' | 'insurance' | 'clinicId' | 'checkedIn'>>) {
    return Appointment.find(conditions).exec()
  }

  public async checkinAppointment (conditions: MongooseFilterQuery<Pick<IAppointment, '_id' | 'familyName' | 'givenName' | 'age' | 'time' | 'address' | 'phone' | 'email' | 'insurance' | 'clinicId' | 'checkedIn'>>) {
    return Appointment.findOneAndUpdate(conditions, { checkedIn: new Date() }).exec()
  }
}
