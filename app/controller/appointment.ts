import { Controller } from 'egg'
import AppointmentService from '../service/appointment'

export default class AppointmentController extends Controller {
  private appointmentService: AppointmentService = this.service.appointment

  public async updateAppointment () {
    const result = await this.appointmentService.updateAppointment(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  public async createAppointment () {
    const result = await this.appointmentService.createAppointment(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  public async findAppointments () {
    const result = await this.appointmentService.findAppointments(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }

  public async checkinAppointment () {
    const result = await this.appointmentService.checkinAppointment(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }
}
