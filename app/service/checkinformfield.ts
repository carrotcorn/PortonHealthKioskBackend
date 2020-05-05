import { ICheckInFormField, CheckInFormField, CheckInFormFieldQuery } from '../model/checkinformfield'
import { Service } from 'egg'

export default class CheckInFormFieldService extends Service {
  public async updateCheckInFormField (conditions: CheckInFormFieldQuery, doc: ICheckInFormField) {
    return CheckInFormField.update(conditions, doc).exec()
  }

  public async findCheckInFormFields (conditions: CheckInFormFieldQuery) {
    return CheckInFormField.find(conditions).exec()
  }

  public async createCheckInFormField (doc: ICheckInFormField) {
    const formField = new CheckInFormField(doc)
    return formField.save()
  }
}
