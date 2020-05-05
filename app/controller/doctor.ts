import { Controller } from 'egg'
import DoctorService from '../service/doctor'
import { authenticated } from '../util'

export default class DoctorController extends Controller {
  private doctorService: DoctorService = this.service.doctor

  @authenticated('clinic')
  public async createDoctor () {
    const result = await this.doctorService.createDoctor(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  @authenticated('clinic')
  public async updateDoctor () {
    const result = await this.doctorService.updateDoctor(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  public async findDoctors () {
    const result = await this.doctorService.findDoctors(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }
}
