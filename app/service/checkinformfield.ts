import { ICheckInFormField, CheckInFormField, CheckInFormFieldQuery } from '../model/checkinformfield'
import { authenticated } from '../util'
import { Service } from 'egg'

export default class CheckInFormFieldService extends Service {
  @authenticated('clinic')
  public async updateCheckInFormField (conditions: CheckInFormFieldQuery, doc: ICheckInFormField) {
    return CheckInFormField.update(conditions, doc).exec()
  }

  public async findCheckInFormFields (conditions: CheckInFormFieldQuery) {
    return CheckInFormField.find(conditions).exec()
  }

  @authenticated('clinic')
  public async createCheckInFormField (doc: ICheckInFormField) {
    const formField = new CheckInFormField(doc)
    return formField.save()
  }
}
