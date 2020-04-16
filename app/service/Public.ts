import { IAppointment, Appointment, IClinic, Clinic } from '../model'
import DataService from './DataService'
import { MongooseFilterQuery } from 'mongoose'

export default class PublicService extends DataService {
  public async createAppointment (doc: IAppointment) {
    const appointment = new Appointment(doc)
    return appointment.save()
  }

  public async findClinics (conditions: MongooseFilterQuery<Pick<IClinic, 'address' | 'phone' | 'email' | 'name' | 'ownerId'>>) {
    return Clinic.find(conditions).exec()
  }
}
