import { Controller } from 'egg'
import AppointmentService from '../service/appointment'
import { authenticated } from '../util'

export default class AppointmentController extends Controller {
  private appointmentService: AppointmentService = this.service.appointment

  @authenticated('clinic')
  public async updateAppointment () {
    const result = await this.appointmentService.updateAppointment(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  @authenticated('clinic')
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
