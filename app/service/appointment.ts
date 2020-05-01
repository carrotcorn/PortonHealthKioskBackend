import { IAppointment, Appointment, AppointmentQuery } from '../model/appointment'
import { authenticated } from '../util'
import { Service } from 'egg'

export default class AppointmentService extends Service {
  @authenticated('clinic')
  public async createAppointment (doc: IAppointment) {
    const appointment = new Appointment(doc)
    return appointment.save()
  }

  @authenticated('clinic')
  public async updateAppointment (conditions: AppointmentQuery, doc: IAppointment) {
    return Appointment.update(conditions, doc).exec()
  }

  public async findAppointments (conditions: AppointmentQuery) {
    return Appointment.find(conditions).exec()
  }

  public async checkinAppointment (conditions: AppointmentQuery) {
    return Appointment.findOneAndUpdate(conditions, { checkedIn: new Date() }).exec()
  }
}
