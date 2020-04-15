import { IAppointment, Appointment } from '../model'
import DataService from './DataService'

export default class PublicService extends DataService {
  public async createAppointment (data: IAppointment) {
    const appointment = new Appointment(data)
    await appointment.save()
  }
}
