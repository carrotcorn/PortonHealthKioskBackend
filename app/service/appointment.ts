import { IAppointment, Appointment, AppointmentQuery } from '../model/appointment'
import { Service } from 'egg'

export default class AppointmentService extends Service {
  public async createAppointment (doc: IAppointment) {
    const appointment = new Appointment(doc)
    return appointment.save()
  }

  public async updateAppointment (conditions: AppointmentQuery, doc: IAppointment) {
    return Appointment.update(conditions, doc).exec()
  }

  public async findAppointments (conditions: AppointmentQuery) {
    return Appointment.find(conditions)
      .populate('patientId')
      .populate('clinicId')
      .populate('doctorId')
      .exec()
  }

  public async checkinAppointment (conditions: AppointmentQuery) {
    return Appointment.findOneAndUpdate(conditions, { checkedIn: new Date() }).exec()
  }
}
