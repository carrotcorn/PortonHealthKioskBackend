import { IClinic, Clinic, ClinicQuery } from '../model/clinic'
import { Service } from 'egg'

export default class ClinicService extends Service {
  public async findClinics (conditions: ClinicQuery) {
    return Clinic.find(conditions).populate('formFields').exec()
  }

  public async createClinic (doc: IClinic) {
    const clinic = new Clinic(doc)
    return clinic.save()
  }

  public async updateClinic (conditions: ClinicQuery, doc: IClinic) {
    return Clinic.update(conditions, doc).exec()
  }
}
