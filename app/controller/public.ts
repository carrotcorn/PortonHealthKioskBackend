import { Controller } from 'egg'
import PublicService from '../service/public'

export default class PublicController extends Controller {
  private publicService: PublicService = this.service.public

  public async findClinics () {
    const result = await this.publicService.findClinics(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }

  public async findAppointments () {
    const result = await this.publicService.findAppointments(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }

  public async checkinAppointment () {
    const result = await this.publicService.checkinAppointment(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }
}
