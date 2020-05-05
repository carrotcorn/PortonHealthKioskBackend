import { Controller } from 'egg'
import ClinicService from '../service/clinic'
import { authenticated } from '../util'

export default class ClinicController extends Controller {
  private clinicService: ClinicService = this.service.clinic

  @authenticated('admin')
  public async createClinic () {
    const result = await this.clinicService.createClinic(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  @authenticated('admin')
  public async updateClinic () {
    const result = await this.clinicService.updateClinic(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  public async findClinics () {
    const result = await this.clinicService.findClinics(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }
}
