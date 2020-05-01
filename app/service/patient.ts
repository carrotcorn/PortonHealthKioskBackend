import { IPatient, Patient, PatientQuery } from '../model/patient'
import { authenticated } from '../util'
import { Service } from 'egg'

export default class PatientService extends Service {
  @authenticated('clinic')
  public async updatePatient (conditions: PatientQuery, doc: IPatient) {
    return Patient.update(conditions, doc).exec()
  }

  public async findPatients (conditions: PatientQuery) {
    return Patient.find(conditions).exec()
  }

  @authenticated('clinic')
  public async createPatient (doc: IPatient) {
    const patient = new Patient(doc)
    return patient.save()
  }
}
