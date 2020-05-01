import { IDoctor, Doctor, DoctorQuery } from '../model/doctor'
import { authenticated } from '../util'
import { Service } from 'egg'

export default class DoctorService extends Service {
  @authenticated('clinic')
  public async updateDoctor (conditions: DoctorQuery, doc: IDoctor) {
    return Doctor.update(conditions, doc).exec()
  }

  public async findDoctors (conditions: DoctorQuery) {
    return Doctor.find(conditions).exec()
  }

  @authenticated('clinic')
  public async createDoctor (doc: IDoctor) {
    const doctor = new Doctor(doc)
    return doctor.save()
  }
}
