import { IDoctor, Doctor, DoctorQuery } from '../model/doctor'
import { Service } from 'egg'

export default class DoctorService extends Service {
  public async updateDoctor (conditions: DoctorQuery, doc: IDoctor) {
    return Doctor.update(conditions, doc).exec()
  }

  public async findDoctors (conditions: DoctorQuery) {
    return Doctor.find(conditions).exec()
  }

  public async createDoctor (doc: IDoctor) {
    const doctor = new Doctor(doc)
    return doctor.save()
  }
}
