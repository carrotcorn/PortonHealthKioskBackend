import { Controller } from 'egg'
import PatientService from '../service/patient'
import { authenticated } from '../util'

export default class PatientController extends Controller {
  private patientService: PatientService = this.service.patient

  @authenticated('clinic')
  public async createPatient () {
    const result = await this.patientService.createPatient(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  @authenticated('clinic')
  public async updatePatient () {
    const result = await this.patientService.updatePatient(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  public async findPatients () {
    const result = await this.patientService.findPatients(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }
}
