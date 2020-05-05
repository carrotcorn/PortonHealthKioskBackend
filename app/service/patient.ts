import { IPatient, Patient, PatientQuery } from '../model/patient'
import { Service } from 'egg'

export default class PatientService extends Service {
  public async updatePatient (conditions: PatientQuery, doc: IPatient) {
    return Patient.update(conditions, doc).exec()
  }

  public async findPatients (conditions: PatientQuery) {
    return Patient.find(conditions).exec()
  }

  public async createPatient (doc: IPatient) {
    const patient = new Patient(doc)
    return patient.save()
  }
}
