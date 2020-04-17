import { IAppointment, Appointment, IClinic, Clinic } from '../model'
import DataService from './DataService'
import { MongooseFilterQuery } from 'mongoose'
import { authenticated } from '../util'

export default class ClinicService extends DataService {
  @authenticated('clinic')
  public async createAppointment (doc: IAppointment) {
    const appointment = new Appointment(doc)
    return appointment.save()
  }

  @authenticated('clinic')
  public async updateAppointment (conditions: MongooseFilterQuery<Pick<IAppointment, '_id' | 'familyName' | 'givenName' | 'age' | 'time' | 'address' | 'phone' | 'email' | 'insurance' | 'clinicId' | 'checkedIn'>>, doc: IAppointment) {
    return Appointment.update(conditions, doc).exec()
  }

  @authenticated('admin')
  public async createClinic (doc: IClinic) {
    const clinic = new Clinic(doc)
    return clinic.save()
  }

  @authenticated('admin')
  public async updateClinic (conditions: MongooseFilterQuery<Pick<IClinic, 'address' | 'phone' | 'email' | 'name' | 'ownerId'>>, doc: IClinic) {
    return Clinic.update(conditions, doc).exec()
  }
}
