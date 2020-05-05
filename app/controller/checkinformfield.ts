import { Controller } from 'egg'
import CheckInFormFieldService from '../service/checkinformfield'
import { authenticated } from '../util'

export default class CheckInFormFieldController extends Controller {
  private checkInFormFieldService: CheckInFormFieldService = this.service.checkinformfield

  @authenticated('clinic')
  public async updateCheckInFormField () {
    const result = await this.checkInFormFieldService.updateCheckInFormField(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  @authenticated('clinic')
  public async createCheckInFormField () {
    const result = await this.checkInFormFieldService.createCheckInFormField(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  public async findCheckInFormFields () {
    const result = await this.checkInFormFieldService.findCheckInFormFields(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }
}
