import { Controller } from 'egg'
import ClinicService from '../service/clinic'

export default class ClinicController extends Controller {
  private clinicService: ClinicService = this.service.clinic

  public async updateAppointment () {
    const result = await this.clinicService.updateAppointment(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  public async createAppointment () {
    const result = await this.clinicService.createAppointment(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  public async createClinic () {
    const result = await this.clinicService.createClinic(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  public async updateClinic () {
    const result = await this.clinicService.updateClinic(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  public async createDoctor () {
    const result = await this.clinicService.createDoctor(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  public async updateDoctor () {
    const result = await this.clinicService.updateDoctor(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }
}
