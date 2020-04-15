import { Controller } from 'egg'
import PublicService from '../service/public'

export default class PublicController extends Controller {
  private publicService: PublicService = this.service.public

  public async createAppointment () {
    await this.publicService.createAppointment(this.ctx.request.body)
    this.ctx.body = { success: true, result: 'Created' }
  }
}
