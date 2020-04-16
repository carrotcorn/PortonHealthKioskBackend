import { IAppointment, Appointment, IClinic, Clinic } from '../model'
import DataService from './DataService'
import { MongooseFilterQuery } from 'mongoose'

export default class ClinicService extends DataService {
  public async findAppointments (conditions: MongooseFilterQuery<Pick<IAppointment, '_id' | 'familyName' | 'givenName' | 'age' | 'time' | 'address' | 'phone' | 'email' | 'insurance'>>) {
    return Appointment.find(conditions).exec()
  }

  public async updateAppointment (conditions: MongooseFilterQuery<Pick<IAppointment, '_id' | 'familyName' | 'givenName' | 'age' | 'time' | 'address' | 'phone' | 'email' | 'insurance'>>, doc: IAppointment) {
    return Appointment.update(conditions, doc).exec()
  }

  public async createClinic (doc: IClinic) {
    const clinic = new Clinic(doc)
    return clinic.save()
  }

  public async updateClinic (conditions: MongooseFilterQuery<Pick<IClinic, 'address' | 'phone' | 'email' | 'name' | 'ownerId'>>, doc: IClinic) {
    return Clinic.update(conditions, doc).exec()
  }
}
